package com.example.shadowfax.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.shadowfax.enums.Status;
import com.example.shadowfax.model.BarCode;
import com.example.shadowfax.model.Packages;
import com.example.shadowfax.model.Rider;
import com.example.shadowfax.service.BarCodeService;
import com.example.shadowfax.service.PackagesService;

@RestController
@RequestMapping("/packages")
public class PackagesController {
	@Autowired
	private PackagesService packagesService;
	@Autowired
	private BarCodeService barCodeService;
	
	@PostMapping("/add")
	public ResponseEntity<?> createPackage(@RequestBody Packages packages) {
	   
	    BarCode barcode = barCodeService.generateBarcode();
	    if (barcode == null || barcode.getCode() == null) {
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                .body("Barcode generation failed!");
	    }
	    packages.setBarcode(barcode);
	    packages.setStatus(Status.CHECKED_IN);
	    packages = packagesService.post(packages);
	    return ResponseEntity.ok(packages);
	}
	 @GetMapping("/all")
	    public List<Packages> getAllPackages() {
	        return packagesService.findAll();
	    }
	 //updating product status at Delivery Location
	 @PutMapping("/scan/{barcode}")
	    public ResponseEntity<?> scanPackage(@PathVariable String barcode) {
	        boolean updated = packagesService.updateStatusByBarcode(barcode, Status.REACHED_LOCATION);
	        
	        if (updated) {
	            return ResponseEntity.ok("Package status updated to REACHED_LOCATION.");
	        } else {
	            return ResponseEntity.badRequest().body("Package not found or already updated.");
	        }
	    }
	 //After assigning the product to rider
	 @PutMapping("/assign/{barcode}/{riderId}")
	    public ResponseEntity<?> assignPackageToRider(@PathVariable String barcode, @PathVariable int riderId) {
	        boolean assigned = packagesService.assignPackageToRider(barcode, riderId);
	        
	        if (assigned) {
	            return ResponseEntity.ok("Package assigned to rider and status updated to OUT_FOR_DELIVERY.");
	        } else {
	            return ResponseEntity.badRequest().body("Package not found, already assigned, or rider does not exist.");
	        }
	    }
	 //get the rider details allocated to the product
	 @GetMapping("/rider/{barcode}")
	    public ResponseEntity<?> getAssignedRider(@PathVariable String barcode) {
	        Rider rider = packagesService.getAssignedRider(barcode);
	        
	        if (rider != null) {
	            return ResponseEntity.ok(rider);
	        } else {
	            return ResponseEntity.badRequest().body("No rider assigned or package not found.");
	        }
	    }
}
