"use client";
import { Button } from '@/components/ui/button';
import React from 'react'

export const DownloadButton = () => {

    const downloadLocalFile = (filename: string) => {
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
        downloadLocalFile('CV Rodrigo Deganutti.docx');
    }

    return (
        <Button className="bg-primary text-background hover:bg-primary/90" onClick={handleDownloadCV}>
            Download CV
        </Button>
    )
}
