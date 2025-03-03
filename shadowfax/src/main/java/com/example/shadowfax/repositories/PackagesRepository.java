package com.example.shadowfax.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.shadowfax.model.Packages;

public interface PackagesRepository extends JpaRepository<Packages, Integer>{

	
	@Query("SELECT p FROM Packages p LEFT JOIN FETCH p.rider WHERE p.barcode.code = :code")
    Packages findByBarcodeCode(@Param("code") String code);
}
