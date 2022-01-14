import  { MongoClient, ObjectId } from "mongodb";
import type { ImongoProperties } from "../properties";

export class MongoUser {
    client: MongoClient;
    database: string;
    constructor(properties: ImongoProperties) {
       this.client = new MongoClient(properties.url, { useNewUrlParser: true, useUnifiedTopology: true });
       this.database = properties.database;
    }

   async getAllRecordFromCollection (collectionName: string, query: any, projections:any = {}) {
      try {
         let connection = await this.client.connect();
         console.log('check projection', projections);
         let result: any = await connection.db(this.database).collection(collectionName).find(query, {projection: projections}).toArray();
         return result;
      } catch (error) {
         console.log(error);
         return {
            status: 'error',
            error
         }
      }
     
    }

    async getFirstMatch (collectionName: string, query: any, projections:any = {}) {
      try {
         let connection = await this.client.connect();
         console.log('check projection', projections);
         let result: any = await connection.db(this.database).collection(collectionName).findOne(query, {projection: projections});
         return result;
      } catch (error) {
         console.log(error);
         return {
            status: 'error',
            error
         }
      }
     
    }

    async addRecordToCollection (collectionName: string, data: any) {
       try {
         let connection = await this.client.connect();
        // let test = await connection.db(this.database).collection(collectionName).createIndex( { "name": 1 }, { unique: true } );
         let result: any = await connection.db(this.database).collection(collectionName).insertOne(data);
         console.log('console somethng:',result);
         return result;

       } catch (error) {
         console.log(error);
         return {
            status: 'error',
            error
         }
       }
    }
    async addToArray (collectionName: string, data: any, topRecordId: string, arrayName: string) {
       try {
         let connection = await this.client.connect();
         let id = new ObjectId(topRecordId);
         let datab = {};
         datab[`${arrayName}`] = data;
         console.log('data db:  ',datab);
     
         let result: any = await connection.db(this.database).collection(collectionName).updateOne({"_id": id}, {$addToSet: datab});
         return result;
       } catch (error) {
         console.log(error);
         return {
            status: 'error',
            error
         }
       }
       finally{
          this.client.close();
       }
    }
    async update (collectionName: string, query: any, data: any) {
      try {
        let connection = await this.client.connect();
      
        let result: any = await connection.db(this.database).collection(collectionName).updateOne(query, data);
        return result;
      } catch (error) {
        console.log(error);
        return {
           status: 'error',
           error
        }
      }
      finally{
         this.client.close();
      }
   }
   async count (collectionName: string, query = {}){
      try {
         let connection = await this.client.connect();
         let result = await connection.db(this.database).collection(collectionName).countDocuments(query);
         return result;
      } catch (error) {
         return {
            status: 'error',
            error
         }
      }
      finally{
         this.client.close();
      }
   }
}