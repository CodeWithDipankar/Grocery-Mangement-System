import os
import pymysql
# import pandas as  pd
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class SQL:
    USERNAME: str = os.getenv('USERNAME')
    PASSWORD:str = os.getenv('PASSWORD')
    HOST:str = os.getenv('HOST')
    DATABASENAME:str = os.getenv('DATABASENAME')
    __conn__ = None 

    def __init__(self):
        self.__conn__ = self.SqlConn()

    def SqlConn(self):
        if self.__conn__ is None:
            self.__conn__ = pymysql.connect(host=self.HOST, user=self.USERNAME, password=self.PASSWORD, database=self.DATABASENAME)
        return self.__conn__

    def SqlInsertion(self, query):
        pass

    def SqlUpdation(self, query):
        pass

    def SqlDeletion(self, query):
        pass

    def fetchAllProducts(self, query = None):
        if query is None:
            query = ("select products.id,products.name, measurement.m_type,products.price_per_unit from products inner join measurement on products.unit = measurement.M_id order by products.id asc")

        cursor = self.__conn__.cursor()
        cursor.execute(query)

        data = []
        for id, item, itemUnit, price in cursor:
            eachItem = { "Sl No.": id, "Product Name": item, "Unit":itemUnit, "Price": price}
            data.append(eachItem)
        # print(pd.DataFrame(data))
        return data
            
# a = SQL()
# print(a.fetchAllProducts())
