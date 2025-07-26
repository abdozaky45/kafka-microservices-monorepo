import {Schema,model} from "mongoose";
import Iuser from "./Iuser-model";
import { RequiredString, RequiredUniqueEmail } from "../../utils/schemas";
import SchemaTypesReference from "../../utils/schemas/schema-types-reference";
const userSchema = new Schema<Iuser>({
    name:RequiredString,
    email:RequiredUniqueEmail,
    password:RequiredString,
});
const User = model<Iuser>(SchemaTypesReference.User, userSchema);
export default User;
