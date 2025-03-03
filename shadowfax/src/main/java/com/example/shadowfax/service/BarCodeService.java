package com.example.shadowfax.service;

import java.io.File;
import java.nio.file.FileSystems;
import java.nio.file.Path;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shadowfax.model.BarCode;
import com.example.shadowfax.repositories.BarCodeRepository;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.oned.Code128Writer;
@Service
public class BarCodeService {
	@Autowired
	private BarCodeRepository barCodeRepository;
	public BarCode generateBarcode() {
        String code = "SGT" + UUID.randomUUID().toString().substring(0, 8);      
        String imagePath = generateBarcodeImage(code);
        BarCode barcode = new BarCode();
        barcode.setCode(code);
        barcode.setImagePath(imagePath);
        barcode = barCodeRepository.save(barcode);
        return barcode;
	}

	private String generateBarcodeImage(String barcodeText) {
	    try {
	        String directory = "./barcodes/";
	        File dir = new File(directory);
	        if (!dir.exists()) dir.mkdirs();

	        String fileName = barcodeText + ".png";
	        String filePath = directory + fileName;
	        Path path = FileSystems.getDefault().getPath(filePath);

	        Code128Writer barcodeWriter = new Code128Writer();
	        BitMatrix bitMatrix = barcodeWriter.encode(barcodeText, BarcodeFormat.CODE_128, 300, 100);
	        MatrixToImageWriter.writeToPath(bitMatrix, "PNG", path);

	        return "http://localhost:8005/barcodes/" + fileName;
	    } catch (Exception e) {
	        throw new RuntimeException("Failed to generate barcode image", e);
	    }
	}

	public BarCode saveBarCode(BarCode barcode) {
		// TODO Auto-generated method stub
		return barCodeRepository.save(barcode);
	}

}
