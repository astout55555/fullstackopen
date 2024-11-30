import express from 'express';
import diagnosisService from '../services/diagnosisService';
import { Diagnosis } from '../types';
import { Response } from 'express';

const router = express.Router();

router.get('/', (_req, res: Response<Diagnosis[]>) => {
  res.send(diagnosisService.getDiagnoses());
});

export default router;