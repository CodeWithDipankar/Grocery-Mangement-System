import os
import pymysql
from dotenv import load_dotenv


USERNAME = os.getenv('USERNAME')
PASSWORD = os.getenv('PASSWORD')
HOST = os.getenv('HOST')
DATABASENAME = os.getenv('DATABASENAME')



connection = pymysql.connect(
    host=HOST,
    user=USERNAME,
    password=PASSWORD,
    database=DATABASENAME
)
