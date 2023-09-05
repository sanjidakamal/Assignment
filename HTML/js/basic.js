var material_cost1 = 150;
var material_cost2 = 160;
var material_cost3 = 170;
var material_cost4 = 180;
var material_cost5 = 190;
var space_cost = 60;
var staff_cost = 70;

var transportation_cost = 50;
var utility_cost1 = (150+50)*(3/100);
var utility_cost2 = (160+50)*(3/100);
var utility_cost3 = (170+50)*(3/100);
var utility_cost4 = (180+50)*(3/100);
var utility_cost5 = (190+50)*(3/100);

var actual_price1 = 800;
var actual_price2 = 850;
var actual_price3 = 900;
var actual_price4 = 950;
var actual_price5 = 1000;

Total_inventory_cost_eachpound1 = material_cost1+transportation_cost+utility_cost1+space_cost+staff_cost;

Total_inventory_cost_eachpound2 = material_cost2+transportation_cost+utility_cost2+space_cost+staff_cost;

Total_inventory_cost_eachpound3 = material_cost3+transportation_cost+utility_cost3+space_cost+staff_cost;

Total_inventory_cost_eachpound4 = material_cost4+transportation_cost+utility_cost4+space_cost+staff_cost;

Total_inventory_cost_eachpound5 = material_cost5+transportation_cost+utility_cost5+space_cost+staff_cost;

console.log(Total_inventory_cost_eachpound1,Total_inventory_cost_eachpound2,Total_inventory_cost_eachpound3,Total_inventory_cost_eachpound4,Total_inventory_cost_eachpound5);

Total_inventory_cost_eachcake1=Total_inventory_cost_eachpound1*5;Total_inventory_cost_eachcake2=Total_inventory_cost_eachpound2*7;Total_inventory_cost_eachcake3=Total_inventory_cost_eachpound3*9;Total_inventory_cost_eachcake4=Total_inventory_cost_eachpound4*11;Total_inventory_cost_eachcake5=Total_inventory_cost_eachpound5*13;

console.log(Total_inventory_cost_eachcake1,Total_inventory_cost_eachcake2,Total_inventory_cost_eachcake3,Total_inventory_cost_eachcake4,Total_inventory_cost_eachcake5);


sale_price1 = actual_price1*(87/100);
sale_price2 = actual_price2*(87/100);
sale_price3 = actual_price3*(87/100);
sale_price4 = actual_price4*(87/100);
sale_price5 = actual_price5*(87/100);

console.log(sale_price1,sale_price2,sale_price3,sale_price4,sale_price5);

total_profit1 = sale_price1 - Total_inventory_cost_eachpound1;
total_profit2= sale_price2 - Total_inventory_cost_eachpound2;
total_profit3 = sale_price3 - Total_inventory_cost_eachpound3;

total_profit4 = sale_price4 - Total_inventory_cost_eachpound4;
total_profit5 = sale_price5 - Total_inventory_cost_eachpound5;


console.log(total_profit1,total_profit2,total_profit3,total_profit4,total_profit5);

totalprofit1=total_profit1*5;
totalprofit2=total_profit2*7;
totalprofit3=total_profit3*9;
totalprofit4=total_profit4*11;
totalprofit5=total_profit5*13;


console.log(totalprofit1,totalprofit2,totalprofit3,totalprofit4,totalprofit5);


perchantageofprofit1=totalprofit1/sale_price1;
perchantageofprofit2=totalprofit2/sale_price2;
perchantageofprofit3=totalprofit3/sale_price3;
perchantageofprofit4=totalprofit4/sale_price4;
perchantageofprofit5=totalprofit5/sale_price5;


console.log(perchantageofprofit1,perchantageofprofit2,perchantageofprofit3,perchantageofprofit4,perchantageofprofit5);


