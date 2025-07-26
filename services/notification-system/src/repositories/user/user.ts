import Iuser from "../../models/user/Iuser-model";
import User from "../../models/user/user-model";

export class UserRepository {
  async createUser(userData:Iuser): Promise<Iuser> {
   const user = await User.create(userData);
    return user;
  }
  async getUserById(userId:string) {
    // Logic to get a user by ID
  }

  async updateUser(userId:string, userData: Iuser) {
    // Logic to update a user
  }

  async deleteUser(userId:string) {
    // Logic to delete a user
  }
}