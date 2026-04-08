import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

export const lngs = {
  en: { nativeName: "English" },
  zh: { nativeName: "中文" },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          skills: "Skills",
          projects: "Projects",
          others: "Others",
          education: "Education",
          certificates: "Certificates",
          works: "Work Experience",
          awards: "Awards",
          publications: "Publications",
          responsibilitiesAndAchievements:
            "Core Responsibilities & Achievements",
          save: "Save",
          open: "Open",
          new: "New",
          export: "Export",
          otherinfo: "Other Info",
          monthNames: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
      },
      zh: {
        translation: {
          skills: "技术栈",
          projects: "项目经历",
          others: "其他",
          education: "教育背景",
          certificates: "证书",
          works: "工作经历",
          awards: "荣誉",
          publications: "发表",
          responsibilitiesAndAchievements: "核心职责与成果",
          save: "保存",
          open: "打开",
          new: "新建",
          export: "导出",
          otherinfo: "其它",
          monthNames: {
            "1": "一月",
            "2": "二月",
            "3": "三月",
            "4": "四月",
            "5": "五月",
            "6": "六月",
            "7": "七月",
            "8": "八月",
            "9": "九月",
            "10": "十月",
            "11": "十一月",
            "12": "十二月",
          },
        },
      },
    },
  });

export default i18n;
