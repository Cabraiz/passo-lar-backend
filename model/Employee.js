import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

const employeeSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});

export default model('Employee', employeeSchema);
