import patients from '../../data/patients';
import { v1 as uuid } from 'uuid';

import { Patient, NonSensitivePatientInfo, NewPatientInfo } from '../types';

const getPatients = (): Patient[] => {
  return patients;
};

const getNonSensitivePatientInfo = (): NonSensitivePatientInfo[] => {
  return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (patientInfo: NewPatientInfo): Patient => {
  const id = uuid();
  return {
    id: id,
    ...patientInfo,
  };
};

export default {
  getPatients,
  getNonSensitivePatientInfo,
  addPatient,
};