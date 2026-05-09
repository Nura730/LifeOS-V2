import { Response } from "express"

import { AuthRequest } from "../../middlewares/auth.middleware"

import {
  createTask,
  getTasks,
  completeTask,
} from "./task.service"

import { createTaskSchema } from "./task.validation"

export const createTaskController =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const validatedData =
        createTaskSchema.parse(
          req.body
        )

      const task = await createTask(
        req.user.id,
        validatedData.title,
        validatedData.description || "",
        validatedData.priority
      )

      res.status(201).json({
        success: true,
        data: task,
      })
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      })
    }
  }

export const getTasksController =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const tasks =
        await getTasks(
          req.user.id
        )

      res.status(200).json({
        success: true,
        data: tasks,
      })
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  }

export const completeTaskController =
  async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const task =
        await completeTask(
          req.params.id,
          req.user.id
        )

      res.status(200).json({
        success: true,
        data: task,
      })
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message,
      })
    }
  }