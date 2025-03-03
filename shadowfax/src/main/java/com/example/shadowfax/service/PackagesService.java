package com.example.shadowfax.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.shadowfax.enums.Status;
import com.example.shadowfax.model.Packages;
import com.example.shadowfax.model.Rider;
import com.example.shadowfax.repositories.PackagesRepository;
import com.example.shadowfax.repositories.RiderRepository;
@Service
public class PackagesService {
	@Autowired
	private PackagesRepository packagesRepository;
	@Autowired
	private RiderRepository riderRepository;
	public Packages post(Packages packages) {
		// TODO Auto-generated method stub
		return packagesRepository.save(packages);
	}
	public List<Packages> findAll() {
		// TODO Auto-generated method stub
		return packagesRepository.findAll();
	}
	@Transactional
	public boolean updateStatusByBarcode(String barcode, Status reachedLocation) {
		// TODO Auto-generated method stub
		 Packages pkg = packagesRepository.findByBarcodeCode(barcode);

	        if (pkg != null && pkg.getStatus() != Status.REACHED_LOCATION) {
	            pkg.setStatus(Status.REACHED_LOCATION);
	            packagesRepository.save(pkg);
	            return true;
	        }
	        return false;
	    }
	@Transactional
	public boolean assignPackageToRider(String barcode, Integer riderId) {
		// TODO Auto-generated method stub
		Packages pkg = packagesRepository.findByBarcodeCode(barcode);
        Rider rider = riderRepository.findById(riderId).orElse(null);

        if (pkg != null && pkg.getStatus() != Status.OUT_FOR_DELIVERY && rider != null) {
            pkg.setRider(rider);
            pkg.setStatus(Status.OUT_FOR_DELIVERY);
            packagesRepository.save(pkg);
            return true;
        }
        return false;
	}
	public Rider getAssignedRider(String barcode) {
        Packages pkg = packagesRepository.findByBarcodeCode(barcode);
        if (pkg != null) {
            return pkg.getRider(); // Return assigned Rider
        }
        return null;
    }
	
	
	

}
