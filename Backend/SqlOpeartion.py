import os
import pymysql
from dotenv import load_dotenv

class SQL:
    USERNAME: str = os.getenv('USERNAME')
    PASSWORD:str = os.getenv('PASSWORD')
    HOST:str = os.getenv('HOST')
    DATABASENAME:str = os.getenv('DATABASENAME')
    
    def __init__(self):
        __conn__ = None
    
    def SqlConn(self):
        if __conn__ is None:
            __conn__ = pymysql.connect(host=self.HOST, user=self.USERNAME, password=self.PASSWORD, database=self.DATABASENAME)
        return __conn__
    
    def SqlInsertion(self, query):
        pass

    def SqlUpdation(self, query):
        pass

    def SqlDeletion(self, query):
        pass

    def SqlFetch(self, query):
        pass
