
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  const translations = {
    language: {
      en: "Language",
      ar: "اللغة"
    },
    english: {
      en: "English",
      ar: "الإنجليزية"
    },
    arabic: {
      en: "Arabic",
      ar: "العربية"
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Globe size={16} />
          <span>{translations.language[language]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={language === 'ar' ? "start" : "end"}>
        <DropdownMenuItem onClick={() => setLanguage('en')}>
          🇺🇸 {translations.english[language]}
          {language === 'en' && <span className={`${language === 'ar' ? 'mr-2' : 'ml-2'}`}>✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('ar')}>
          🇸🇦 {translations.arabic[language]}
          {language === 'ar' && <span className={`${language === 'ar' ? 'mr-2' : 'ml-2'}`}>✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
