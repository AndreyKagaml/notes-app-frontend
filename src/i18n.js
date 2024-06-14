import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "title": "Notes",
            "addNote": "Add Note",
            "editNote": "Edit Note",
            "deleteNote": "Delete Note",
            "save": "Save",
            "cancel": "Cancel"
        }
    },
    es: {
        translation: {
            "title": "Notas",
            "addNote": "Agregar Nota",
            "editNote": "Editar Nota",
            "deleteNote": "Eliminar Nota",
            "save": "Guardar",
            "cancel": "Cancelar"
        }
    }
};

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
