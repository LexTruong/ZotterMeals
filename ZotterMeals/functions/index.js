const {log} = require("firebase-functions/logger");
const {onSchedule} = require("firebase-functions/v2/scheduler");
const {initializeApp,
  applicationDefault,
  getApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");

initializeApp({
  credential: applicationDefault(),
});
const FIRESTORE_DB = getFirestore(getApp());

// At end of day, gets nutrition info and saves it
// as past date. Resets current meal list to empty.
exports.resetDailyProgress = onSchedule("0 0 * * *", async (event) => {
  try {
    FIRESTORE_DB.collection("users").get().then((snapshot) => {
      snapshot.forEach((doc) => {
        let totalCalories = 0;
        let totalProtein = 0;
        let totalFat = 0;
        let totalTransFat = 0;
        let totalSaturatedFat = 0;
        let totalCholesterol = 0;
        let totalSodium = 0;
        let totalCarbohydrates = 0;
        let totalFiber = 0;
        let totalSugars = 0;
        let totalIron = 0;
        let totalVitaminA = 0;
        let totalVitaminC = 0;
        let totalCalcium = 0;

        doc.data().currentDay.forEach((mealTypeList) => {
          mealTypeList.data.forEach((item) => {
            if (item.nutrition.calories) {
              totalCalories += parseInt(item.nutrition.calories);
            }
            if (item.nutrition.calories) {
              totalProtein += parseInt(item.nutrition.protein);
            }
            if (item.nutrition.totalFat) {
              totalFat += parseInt(item.nutrition.totalFat);
            }
            if (item.nutrition.totalTransFat) {
              totalTransFat += parseInt(item.nutrition.transFat);
            }
            if (item.nutrition.totalSaturatedFat) {
              totalSaturatedFat += parseInt(item.nutrition.saturatedFat);
            }
            if (item.nutrition.totalCholesterol) {
              totalCholesterol += parseInt(item.nutrition.cholesterol);
            }
            if (item.nutrition.totalSodium) {
              totalSodium += parseInt(item.nutrition.sodium);
            }
            if (item.nutrition.totalCarbohydrates) {
              totalCarbohydrates += parseInt(item.nutrition.totalCarbohydrates);
            }
            if (item.nutrition.totalFiber) {
              totalFiber += parseInt(item.nutrition.dietaryFiber);
            }
            if (item.nutrition.totalSugars) {
              totalSugars += parseInt(item.nutrition.sugars);
            }
            if (item.nutrition.totalIron) {
              totalIron += parseInt(item.nutrition.iron);
            }
            if (item.nutrition.totalVitaminA) {
              totalVitaminA += parseInt(item.nutrition.vitaminA);
            }
            if (item.nutrition.totalVitaminC) {
              totalVitaminC += parseInt(item.nutrition.vitaminC);
            }
            if (item.nutrition.totalCalcium) {
              totalCalcium += parseInt(item.nutrition.calcium);
            }
          });
        });

        const curDate = new Date().toLocaleDateString();
        const curDayData = {
          date: curDate,
          totalCalories,
          totalProtein,
          totalFat,
          totalTransFat,
          totalSaturatedFat,
          totalCholesterol,
          totalSodium,
          totalCarbohydrates,
          totalFiber,
          totalCalcium,
          totalSugars,
          totalIron,
          totalVitaminA,
          totalVitaminC,
        };
        const curPastDates = doc.data().pastDates;
        curPastDates.push(curDayData);

        doc.ref.update({
          pastDates: curPastDates,
          currentDay: [
            {
              title: "Breakfast",
              data: [],
            },
            {
              title: "Lunch",
              data: [],
            },
            {
              title: "Dinner",
              data: [],
            },
          ],
        });
      });
    });

    log("Reset and recorded all users' daily progress.");
  } catch (err) {
    log(err);
  }
});
