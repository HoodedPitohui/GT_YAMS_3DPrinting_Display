clc;
clear all;
close all;

%% 
baseStr = "=OR(";
printer = "MarkForged";
stInd = 2;
numRows = 20;
cellA = "c";
cellB = "d";
markString = generateRules(printer, stInd, cellA, cellB, numRows, baseStr)

printer = "Stratasys (FDM)";
stratString = generateRules(printer, stInd, cellA, cellB, numRows, baseStr)

printer = "SLA (Form3 and Form2)";
slaString = generateRules(printer, stInd, cellA, cellB, numRows, baseStr)


printer = "Sinterit";
sintString = generateRules(printer, stInd, cellA, cellB, numRows, baseStr)

printer = "MakerBot";
makString = generateRules(printer, stInd, cellA, cellB, numRows, baseStr)

