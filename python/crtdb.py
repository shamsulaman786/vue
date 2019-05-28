# import mysql.connector

# mydb = mysql.connector.connect(
#   host="localhost",
#   user="root",
#   passwd="mohdzaid"
# )

# mycursor = mydb.cursor()

# mycursor.execute("CREATE DATABASE mydatabase")

import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="mohdzaid"
)

print(mydb)