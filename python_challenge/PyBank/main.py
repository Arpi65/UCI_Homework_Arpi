
#	 Need to read the file from the data source C:\Users\arpib\Desktop\uci-irv-data-pt-08-2020-u-c\02-Homework\03-Python\Instructions\PyBank\Resources
#     The current Folder working in is C:\Users\arpib\Desktop\python-challenge\PyBank
import os
import csv
#csvpath = os.path.join('..','uci-irv-data-pt-08-2020-u-c','02-Homework','03-Python','Instructions','PyBank','Resources','budget_data.csv')
#	use next and csv reader		
csvpath=os.path.join('..','..','uci-irv-data-pt-08-2020-u-c','02-Homework','03-Python','Instructions','PyBank','Resources','budget_data.csv')
with open(csvpath) as csvfile:
	csvreader=csv.reader(csvfile,delimiter=",")
	print(csvreader)
	print("-----------------------------")
	csvheader=next(csvreader) 
	print(f"CSV Header: {csvheader}")
	#Number of months in the file
	Number_Of_Months=sum(1 for line in csvreader)
	print(f'Number of months in the file {Number_Of_Months}')
#	# The net total amount of "Profit/Losses" over the entire period
with open(csvpath) as csvfile:
	csvreader=csv.reader(csvfile,delimiter=",")
	csvheader=next(csvreader) 	
	total=sum(float(row[1]) for row in csvreader)
	print(f'Total  of Profit/Loss {total}')
with open(csvpath) as csvfile:
	csvreader=csv.reader(csvfile,delimiter=",")
	csvheader=next(csvreader) 
	maximum=max(float(row[1]) for row in csvreader)
	print(f'Maximum Value {maximum}')
	for row in csvreader:
		
		if (float(row[1])<=0):
			print(row)

	
average=total/Number_Of_Months
print(f'Average profit/Loss {average} ')

	 	 
	
# The net total amount of "Profit/Losses" over the entire period
# The average of the changes in "Profit/Losses" over the entire period
# The greatest increase in profits (date and amount) over the entire period
# The greatest decrease in losses (date and amount) over the entire period
	
