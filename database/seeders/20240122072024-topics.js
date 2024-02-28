"use strict";

const slug = require("slug");
slug.charmap["/"] = "-";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "topics",
      [
        {
          name: "Semua Topik",
          slug: slug("Semua Topik"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Menstruasi",
          slug: slug("Menstruasi"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "HIV/AIDS",
          slug: slug("HIV/AIDS"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kehamilan Remaja",
          slug: slug("Kehamilan Remaja"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Orientasi Seksual",
          slug: slug("Orientasi Seksual"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kontrasepsi",
          slug: slug("Kontrasepsi"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pelecehan Seksual pada Anak",
          slug: slug("Pelecehan Seksual pada Anak"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kehamilan",
          slug: slug("Kehamilan"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Perilaku Seksual",
          slug: slug("Perilaku Seksual"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("topics", null, {});
  },
};
