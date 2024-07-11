"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LinkIcon, Copy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { baseURL } from "@/app/requestsapi/request";
import { useToast } from "@/components/ui/use-toast";
import { useSearchParams } from "next/navigation";

export function DialogAddUser() {
  const { toast } = useToast();
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const referral_code = "user" + id!.toString();
//   const message = `
 
// 🥦
// പ്രിയപ്പെട്ടവരേ 

//  കേരളത്തിൽ നിന്നും ഒരുകോടി വൃക്ഷത്തൈകൾ  നട്ട് വളർത്തി പരിപാലിച്ചു  അതിന്റെ ഓരോ മൂന്നുമാസത്തെയും വളർച്ച പ്രകടമാകുന്ന ഫോട്ടോ  www.GreenCleanEarth.org എന്ന വെബ്സൈറ്റിൽ പ്രസിദ്ധീകരിച്ചു  ഐക്യരാഷ്ട്രസഭയുടെ പരിസ്ഥിതി വിഭാഗമായ യു.എൻ.ഇ.പി.യിലേക്ക്  സമർപ്പിക്കുവാൻ ലക്ഷ്യമിടുന്ന  ഗ്രീൻ ക്ലീൻ കേരള വൃക്ഷത്തൈ പരിപാലന മത്സരത്തിലും  അതോടൊപ്പം ഉള്ള  ഹരിത -കലാ- ശാസ്ത്ര മത്സരങ്ങളിലും  നമ്മുടെ സ്ഥാപനവും പങ്കെടുക്കുന്നുണ്ട്. 
// 🥦
//  നമ്മുടെ വിദ്യാലയവും വീടും പരിസരവും മാലിന്യമുക്തവും ഹരിതാഭവും ആക്കുവാനുള്ള പ്രവർത്തനങ്ങൾ നടത്തുന്ന
// ഈ മത്സരങ്ങളിൽ മികച്ച പ്രകടനം ചെയ്യുന്ന  വ്യക്തികൾക്കും സ്ഥാപനങ്ങൾക്കുമായി  പ്രൊഫസർ ശോഭീന്ദ്ര ന്റെ പേരിലുള്ള ഒരു ലക്ഷം രൂപയുടെ പുരസ്കാരങ്ങളും സമ്മാനങ്ങളും ഉണ്ട്.
// 🥦
//  ഈ മത്സരങ്ങളിൽ പങ്കെടുക്കുവാനായി  എല്ലാ അധ്യാപകരും  ഈ ലിങ്കിൽ ക്ലിക്ക് ചെയ്തു  രജിസ്ട്രേഷൻ നടത്തി ഒരു യൂസർ നെയിം പാസ്സ്‌വേർഡും ക്രിയേറ്റ് ചെയ്തു  വിദ്യാർത്ഥികൾക്ക് അയച്ചുകൊടുക്കുകയും , 
//  അവർ ഈ വർഷം നട്ട് വളർത്തിയ തൈകളുടെ കൂടെ  ഒരു സെൽഫി എടുത്ത്, ഓരോ മൂന്നുമാസം കൂടുമ്പോഴും   ഈ വെബ്സൈറ്റിൽ അപ്‌ലോഡ് ചെയ്യണമെന്ന്  നിർദ്ദേശിക്കണമെന്നും അഭ്യർത്ഥിക്കുന്നു
// 🥦
//  താഴെക്കൊടുത്ത ലിങ്കിൽ ക്ലിക്ക് ചെയ്തു  രജിസ്റ്റർ ചെയ്തതിനുശേഷം യൂസർ നെയ്മും പാസ്സ്‌വേർഡും  ക്രിയേറ്റ് ചെയ്തു  വിദ്യാർത്ഥികൾക്ക് അയച്ചു കൊടുക്കുക 
// 👇🏼
// ${baseURL}/user-register?id=${parseInt(id!)}&ref=${referral_code}
// 🥦
//  സംശയങ്ങൾക്ക്
// 🥦
// 9645 9645 92
// 🥦
// Web: www.GreenCleanEarth.org 
// Youtube /fb/insta: Green Clean Kerala
// Whatsapp/Telegram : 9645 9645 92
// Mail: GreenCleanKerala@gmail.Com
// Follow the link to join GreenCleanEarth mission.
// `;

const message = `
${baseURL}/user-register?id=${parseInt(id!)}&ref=${referral_code}

ഗ്രീൻ ക്ലീൻ കേരള ഹരിതമത്സരങ്ങളിൽ പങ്കെടുക്കുവാൻ മുകളിൽ കൊടുത്ത ലിങ്കിൽ ക്ലിക്ക് ചെയ്ത് സ്വന്തം ഫോൺ നമ്പർ ഉപയോഗിച്ച്  രജിസ്റ്റർ ചെയ്യുക.

മത്സരങ്ങളിൽ പങ്കെടുക്കുവാൻ

1) ഈ വർഷം നട്ടുവളർത്തുന്ന വൃക്ഷത്തൈകൾ പരിപാലിച്ചതിനുശേഷം ഓരോ മൂന്നുമാസം കൂടുമ്പോഴും അതിന്റെ കൂടെ സെൽഫിയെടുത്ത് ഈ വെബ്സൈറ്റിൽ, നേരത്തെ കൊടുത്ത ഫോൺ നമ്പറും പാസ്സ്‌വേർഡും ഉപയോഗിച്ച് User എന്ന നിലയിൽ Login ചെയ്ത് അപ്‌ലോഡ് ചെയ്യുക.ഭാഗ്യശാലികൾക്ക് സമ്മാനങ്ങൾ.

2) നിങ്ങളുടെ ഹരിത പ്രവർത്തനങ്ങളുടെയും, കലാസൃഷ്ടികളുടെയും വീഡിയോ തയ്യാറാക്കി സ്കൂൾ കോഡിനേറ്ററിൽ നിന്നും രജിസ്ട്രേഷൻ നമ്പർ വാങ്ങി 9645 9645 92 എന്ന നമ്പറിലേക്ക് അയച്ചു കൊടുക്കുക.

അവ Green Clean kerala എന്ന യൂട്യൂബ് ചാനലിൽ പബ്ലിഷ് ചെയ്യുന്നതും ഓരോ വിഭാഗത്തിലും ഏറ്റവും മികച്ചതിന് പുരസ്കാരങ്ങളും സമ്മാനങ്ങളും നൽകുന്നതുമാണ്.

മത്സരങ്ങളെ കുറിച്ച് അറിയുവാൻ ഈ വീഡിയോ കാണുക 
👇🏼

https://youtu.be/sLGVV0qergg?si=QJ4wOg7Nz2DCYq3y

🥦
`;

  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = async (text: any) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Oops, Something went wrong!",
        description: "Please try again...",
      });
      console.error(err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-800 my-2">
          <LinkIcon className="mr-2 h-4 w-4" />
          Get referral link
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-[425px] h-[calc(100vh-4rem)] mx-auto my-4 p-0 flex flex-col">
        <div className="flex-grow overflow-y-auto p-6">
          <DialogHeader>
            <DialogTitle>Add members</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div>
{/*             <p className="text-base">
              🥦 പ്രിയപ്പെട്ടവരേ
              <br />
              <br />
              കേരളത്തിൽ നിന്നും ഒരുകോടി വൃക്ഷത്തൈകൾ  നട്ട് വളർത്തി
              പരിപാലിച്ചു  അതിന്റെ ഓരോ മൂന്നുമാസത്തെയും വളർച്ച
              പ്രകടമാകുന്ന ഫോട്ടോ  www.GreenCleanEarth.org എന്ന വെബ്സൈറ്റിൽ
              പ്രസിദ്ധീകരിച്ചു  ഐക്യരാഷ്ട്രസഭയുടെ പരിസ്ഥിതി
              വിഭാഗമായ യു.എൻ.ഇ.പി.യിലേക്ക്  സമർപ്പിക്കുവാൻ ലക്ഷ്യമിടുന്ന
              ഗ്രീൻ ക്ലീൻ കേരള വൃക്ഷത്തൈ പരിപാലന മത്സരത്തിലും  അതോടൊപ്പം ഉള്ള
              ഹരിത -കലാ- ശാസ്ത്ര മത്സരങ്ങളിലും  നമ്മുടെ സ്ഥാപനവും
              പങ്കെടുക്കുന്നുണ്ട്. 
              🥦 നമ്മുടെ വിദ്യാലയവും വീടും
              പരിസരവും മാലിന്യമുക്തവും ഹരിതാഭവും ആക്കുവാനുള്ള
              പ്രവർത്തനങ്ങൾ നടത്തുന്ന ഈ മത്സരങ്ങളിൽ മികച്ച പ്രകടനം
              ചെയ്യുന്ന  വ്യക്തികൾക്കും സ്ഥാപനങ്ങൾക്കുമായി  പ്രൊഫസർ
              ശോഭീന്ദ്ര ന്റെ പേരിലുള്ള ഒരു ലക്ഷം രൂപയുടെ പുരസ്കാരങ്ങളും
              സമ്മാനങ്ങളും ഉണ്ട്. 
              🥦 ഈ മത്സരങ്ങളിൽ
              പങ്കെടുക്കുവാനായി  എല്ലാ അധ്യാപകരും  ഈ ലിങ്കിൽ ക്ലിക്ക്
              ചെയ്തു  രജിസ്ട്രേഷൻ നടത്തി ഒരു യൂസർ നെയിം പാസ്സ്‌വേർഡും
              ക്രിയേറ്റ് ചെയ്തു  വിദ്യാർത്ഥികൾക്ക് അയച്ചുകൊടുക്കുകയും ,
              അവർ ഈ വർഷം നട്ട് വളർത്തിയ തൈകളുടെ കൂടെ  ഒരു സെൽഫി
              എടുത്ത്, ഓരോ മൂന്നുമാസം കൂടുമ്പോഴും   ഈ വെബ്സൈറ്റിൽ
              അപ്‌ലോഡ് ചെയ്യണമെന്ന്  നിർദ്ദേശിക്കണമെന്നും അഭ്യർത്ഥിക്കുന്നു
              🥦 താഴെക്കൊടുത്ത ലിങ്കിൽ ക്ലിക്ക് ചെയ്തു  രജിസ്റ്റർ
              ചെയ്തതിനുശേഷം യൂസർ നെയ്മും പാസ്സ്‌വേർഡും  ക്രിയേറ്റ്
              ചെയ്തു  വിദ്യാർത്ഥികൾക്ക് അയച്ചു കൊടുക്കുക 
              👇🏼
            </p>
            <Link
              href={`/user-register?id=${id}&ref=${referral_code}`}
              className="text-green-600 text-base"
            >
              {baseURL}/user-register?id={parseInt(id!)}&ref={referral_code}
            </Link>
            <p className="py-2">
              🥦 സംശയങ്ങൾക്ക് 🥦 9645 9645 92 🥦 Web:
              www.GreenCleanEarth.org Youtube /fb/insta: Green Clean Kerala
              Whatsapp/Telegram : 9645 9645 92 Mail:
              GreenCleanKerala@gmail.Com Follow the link to join
              GreenCleanEarth mission.
            </p> */}
                        <p className="text-base">
              <Link
              href={`/user-register?id=${id}&ref=${referral_code}`}
              className="text-green-600 text-base"
            >
              {baseURL}/user-register?id={parseInt(id!)}&ref={referral_code}
            </Link>
              <br />
              <br />
              ഗ്രീൻ ക്ലീൻ കേരള ഹരിതമത്സരങ്ങളിൽ പങ്കെടുക്കുവാൻ മുകളിൽ കൊടുത്ത ലിങ്കിൽ ക്ലിക്ക് ചെയ്ത് സ്വന്തം ഫോൺ നമ്പർ ഉപയോഗിച്ച്  രജിസ്റ്റർ ചെയ്യുക.
              <br/>
              <br/>
              ഈ സന്ദേശം നിങ്ങളുടെ സ്ഥാപനത്തിലെ മറ്റു  വ്യക്തികൾക്ക് കൈമാറുവാൻ വേണ്ടി  താഴെ പച്ചനിറത്തിൽ കാണുന്ന Copy this message എന്ന ബട്ടൺ ക്ലിക്ക് ചെയ്ത്  ഷെയർ ചെയ്യുക.
              <br/>
              <br/>
              <b>മത്സരങ്ങളിൽ പങ്കെടുക്കുവാൻ</b>
              <br/>
              <br/>
              1) ഈ വർഷം നട്ടുവളർത്തുന്ന വൃക്ഷത്തൈകൾ പരിപാലിച്ചതിനുശേഷം ഓരോ മൂന്നുമാസം കൂടുമ്പോഴും അതിന്റെ കൂടെ സെൽഫിയെടുത്ത് ഈ വെബ്സൈറ്റിൽ, നേരത്തെ കൊടുത്ത ഫോൺ നമ്പറും പാസ്സ്‌വേർഡും ഉപയോഗിച്ച് User എന്ന നിലയിൽ Login ചെയ്ത് അപ്‌ലോഡ് ചെയ്യുക.ഭാഗ്യശാലികൾക്ക് സമ്മാനങ്ങൾ.
              <br/>
              <br/>
              2) നിങ്ങളുടെ ഹരിത പ്രവർത്തനങ്ങളുടെയും, കലാസൃഷ്ടികളുടെയും വീഡിയോ തയ്യാറാക്കി സ്കൂൾ കോഡിനേറ്ററിൽ നിന്നും രജിസ്ട്രേഷൻ നമ്പർ വാങ്ങി 9645 9645 92 എന്ന നമ്പറിലേക്ക് അയച്ചു കൊടുക്കുക.
              <br/>
              <br/>
              അവ Green Clean kerala എന്ന യൂട്യൂബ് ചാനലിൽ പബ്ലിഷ് ചെയ്യുന്നതും ഓരോ വിഭാഗത്തിലും ഏറ്റവും മികച്ചതിന് പുരസ്കാരങ്ങളും സമ്മാനങ്ങളും നൽകുന്നതുമാണ്.
              <br/>
              <br/>
              മത്സരങ്ങളെ കുറിച്ച് അറിയുവാൻ ഈ വീഡിയോ കാണുക
👇🏼            <Link
              href={`https://youtu.be/sLGVV0qergg?si=QJ4wOg7Nz2DCYq3y`}
              className="text-green-600 text-base"
            >
              https://youtu.be/sLGVV0qergg?si=QJ4wOg7Nz2DCYq3y
            </Link>
              <br/>
              <br/>
              🥦
            </p>
          </div>
        </div>
        <div className="p-2 border-t">
          <Button
            onClick={() => copyToClipboard(message)}
            className="bg-green-600 hover:bg-green-800 rounded-full  h-12 flex items-center justify-center ml-auto"
          >
            {isCopied ? (
              <span className="text-xs">Copied!</span>
            ) : (
              <span className="text-xs"><Copy className="h-5 w-10" />Copy this message</span>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
