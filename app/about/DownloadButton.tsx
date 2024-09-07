"use client";
import { Button } from '@/components/ui/button';
import React from 'react'

export const DownloadButton = () => {

    const downloadLocalPDF = (filename: string) => {
        const fileUrl = '/' + filename;
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();

        if (link.parentNode){
            link.parentNode.removeChild(link);
        }

    };

    const handleDownloadCV = () => {
        console.log('Downloading CV');

        // Asegúrate de que 'cv.pdf' existe en la carpeta public
        downloadLocalPDF('Rodrigo Deganutti CV.pdf');
    }

    return (
        <Button className="bg-primary text-background hover:bg-primary/90" onClick={handleDownloadCV}>
            Download CV
        </Button>
    )
}
