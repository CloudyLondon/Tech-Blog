// const all Dependencies i need
const PORT = process.env.PORT || 3001;
const path = require("path");
const express = require("express");
const session = require("express-session");
const sequelize = require("./config/connection");
const controllers = require("./controllers");
