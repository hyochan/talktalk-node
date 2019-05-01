import express from 'express';
import asyncHandler from 'express-async-handler';

export const emailRouter = express.Router();

emailRouter.post('/verify', asyncHandler(async (req, res) => {
  res.status(501).send('Not Implemented');
}));

emailRouter.get('/reset-password', asyncHandler(async (req, res) => {
  res.status(501).send('Not Implemented');
}));

emailRouter.post('/reset-password', asyncHandler(async (req, res) => {
  res.status(501).send('Not Implemented');
}));
