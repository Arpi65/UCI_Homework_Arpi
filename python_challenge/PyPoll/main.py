# read the file
import os
import csv
#filepath
csvpath=os.path.join('..','..','..','uci-irv-data-pt-08-2020-u-c',
'02-Homework','03-Python','Instructions',
'PyPoll','Resources','election_data.csv')
candidate=[]
with open(csvpath) as csvpoll:
    pollreader=csv.reader(csvpoll,delimiter=",")
    print(pollreader)
    #skip the header
    csvheader=next(pollreader)
    #creating a list for candidates --raw
    for row in pollreader:
        candidate.append(row[2])

    #First method to calc the total of votes
    totalvotes1=len(candidate)
    print(f"First way to calc total number of votes {totalvotes1}")
    list1=["Total Number of Votes",(totalvotes1)]
    #Extract names of candidates as unique values
    unique=[]
    #for value coutns empty list
    countvals=[]
    #for percent votes empty list
    percentvote=[]
    countv=0
    for vals in candidate: 
        if vals not in unique:
            unique.append(vals)
    print(unique)
    #counting # of votes and percentages 
    for uvals in unique:
        for vals in candidate:
            if uvals==vals:
                countv=countv+1
        countvals.append(countv)
        percent=countv/totalvotes1*100
        percentvote.append(percent)
        countv=0
    print(countvals)
    print(percentvote)
    #counting who won
    nextv=countvals[3]
    for i in countvals:
        if i>=nextv:
            maxv=i
        nextv=i
        
    print(maxv)
   


    
    


    
    
