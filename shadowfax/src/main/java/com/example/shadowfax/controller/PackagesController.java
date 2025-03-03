package com.example.shadowfax.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.shadowfax.enums.Status;
import com.example.shadowfax.model.BarCode;
import com.example.shadowfax.model.Packages;
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
}
