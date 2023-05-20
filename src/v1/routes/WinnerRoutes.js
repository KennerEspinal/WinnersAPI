const express = require("express");
const { getWinners, getWinner, createWinner, updateWinner, deleteWinner } = require("../../controllers/WinnerController.js")

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Winner:
 *       type: object 
 *       properties:
 *         _id:
 *           type: string
 *           example: 64639976ec8fac5ab7bc524f
 *         winner:
 *           type: string
 *           example: X
 *         score:
 *           type: number
 *           example: 1
 *         fecha:
 *           type: string
 *           example: Sat May 20 2023 15:08:19 GMT-0500 (hora estándar de Colombia)
 */


router
  // get all winners
  /**
   * @swagger
   * /api/v1/winners:
   *   get:
   *     summary: Get list of winners
   *     tags: [Winners]
   *     description: Get all winners.
   *     responses:
   *       200:
   *         description: Get list winners successfully.
   *       500:
   *         description: Internal Error.
   */
  .get("/", getWinners)


  //create winner
  /**
   * @swagger
   * /api/v1/winners:
   *   post:
   *     summary: Create new Winner
   *     tags: [Winners]
   *     description: create a new winner with he information sended.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               _id:
   *                 type string
   *               winner:
   *                 type: string
   *                 description: Name winner
   *               score: 
   *                 type: number
   *                 description: Score Winner
   *               fecha:
   *                 type: string
   *                 description: Date Winner
   *             example:
   *               winner: "X or O"
   *               score: 1
   *               fecha: "Sat May 20 2023 15:08:19 GMT-0500 (hora estándar de Colombia)"
   *     responses:
   *       201:
   *         description: Winner created successfully.
   *       400:
   *         description: Request Failed.
   *       500:
   *         description: Internal Error.
   */
  .post("/", createWinner)

  // get a winner
  
  /**
   * @swagger
   * /api/v1/winners/{id}:
   *   get:
   *     summary: Get a winner by ID
   *     tags: [Winners]
   *     description: Get the details of winner by ID.
   *     parameters:
   *       - in: path
   *         name: id
   *         description: ID winner
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Successfully obtained winner details.
   *       404:
   *         description: Winner not found.
   *       500:
   *         description: Internal Error.
   */
  .get("/:id", getWinner)

  // update a winner
  /**
   * @swagger
   * /api/v1/winners/{id}:
   *   put:
   *     summary: Update a winner by ID
   *     tags: [Winners]
   *     description: Update a winner's details based on their ID.
   *     parameters:
   *       - in: path
   *         name: id
   *         description: Winner ID
   *         required: true
   *         schema:
   *           type: string
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               winner:
   *                 type: string
   *                 description: Winner name
   *             example:
   *               winner: X or O
   *     responses:
   *       200:
   *         description: Winner Updated Successfully.
   *       400:
   *         description: Request Failed.
   *       404:
   *         description: winner not found.
   *       500:
   *         description: Internal Error.
   */
  .put("/:id", updateWinner)

  // delete a winner
  /**
   * @swagger
   * /api/v1/winners/{id}:
   *   delete:
   *     summary: Remove a winner by ID.
   *     tags: [Winners]
   *     description: Remove a winner based on their ID.
   *     parameters:
   *       - in: path
   *         name: id
   *         description: Winner ID
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Winner successfully removed.
   *       404:
   *         description: Winner not found.
   *       500:
   *         description: Internal Error.
   */
  .delete("/:id", deleteWinner)

module.exports = router;
