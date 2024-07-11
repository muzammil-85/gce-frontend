"use client";
import Footer from "@/components/footer";
import NavigationBar from "@/components/navigationBar";
import { UserPlus } from "lucide-react";
import Link from 'next/link'
import { DialogAddUser } from "./dialog-add-user";
import { useSearchParams, useRouter } from "next/navigation";
import { apiURL } from "@/app/requestsapi/request";
import { useToast } from "@/components/ui/use-toast"
import React, { Suspense } from 'react';
import Cookies from 'js-cookie';

function CoordinatorDashBoardContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const co_id = searchParams.get("id");
  const token = Cookies.get('token');
  if (!token) {
    // Redirect to the login page
    router.push("/login");
  }

  async function onSubmit(values: any) {
    try {
      const response = await fetch(
        `${apiURL}/coordinator/${co_id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
          credentials: "include", // Include cookies in the request
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Oops, Something went wrong!",
        description: "Please try again...",
      });
      console.error("Error:", error);
    }
  }

  return (
    <div className="bg-green-50 dark:bg-gray-900">
      <NavigationBar />

      <div className="container mx-auto md:max-w-5xl min-h-screen mt-4">
        <h1 className="text-3xl my-4 font-bold mt-8 pb-4 border-b-2">Coordinator Dashboard</h1>
{/*         <p>താഴെക്കൊടുത്ത ലിങ്ക് കോപ്പി ചെയ്തു  എല്ലാ ക്ലാസ് ടീച്ചർമാർക്കും അയച്ചു കൊടുക്കുക.
 അവരോട് സ്വന്തം മൊബൈൽ നമ്പറും പേരും വെച്ച്  ക്ലാസിന്റെ പേരിൽ രജിസ്റ്റർ ചെയ്യുവാൻ പറയുക.
 യൂസർനേമും പാസ്സ്‌വേർഡും  എല്ലാ കുട്ടികൾക്കും അയച്ചു കൊടുക്കുവാനും പറയുക.
 അതുവെച്ച് എല്ലാ കുട്ടികളോടും  തൈകൾ അപ്‌ലോഡ് ചെയ്യുവാൻ പറയുക</p><br /><br /> */}
                <p><b>അഭിനന്ദനങ്ങൾ</b><br /><br />
                   ഇപ്പോൾ താങ്കളുടെ സ്ഥാപനത്തിന്റെ പേരിൽ COORDINATOR എന്ന നിലയിൽ താങ്കൾ രജിസ്റ്ററേഷൻ ചെയ്തിരിക്കുന്നു.

 മത്സരങ്ങളിൽ പങ്കെടുക്കുവാൻ  താങ്കളും, മറ്റു അധ്യാപകരും, വിദ്യാർത്ഥികളും എല്ലാം സ്വന്തം ഫോൺ നമ്പർ ഉപയോഗിച്ച്  USER എന്ന നിലയിൽ രജിസ്റ്റർ ചെയ്യേണ്ടതുണ്ട്. 

 സ്വന്തം ഫോൺ നമ്പറിൽ രജിസ്റ്റർ ചെയ്യുവാൻ പ്രയാസമുള്ള വിദ്യാർത്ഥികൾക്ക്   ക്ലാസ് അധ്യാപകൻ രജിസ്റ്റർ ചെയ്ത  ഫോൺ നമ്പറും പാസ്സ്‌വേർഡും ഉപയോഗിച്ചും പങ്കെടുക്കാവുന്നതാണ്.

 താങ്കൾക്ക് USER എന്ന നിലയിൽ രജിസ്റ്റർ ചെയ്യുവാനും താങ്കളുടെ സ്ഥാപനത്തിലെ  മറ്റുള്ളവരെ Invite ചെയ്യുവാനും വേണ്ടി താഴെ കൊടുത്ത ബട്ടൺ ക്ലിക്ക്  ചെയ്യുക.
                </p><br /><br />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div
            className="flex justify-start items-start gap-3 text-xl border rounded-xl shadow p-6 bg-white hover:bg-green-100 hover:shadow-md hover:border-green-600"
          >
            <div>
              <UserPlus size={48} color="#16a34a" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xl">Invite uploader</p>
              <DialogAddUser />
            </div>
          </div>
        </div>
{/*            <p>മുകളിൽ കാണുന്ന Invite uploader എന്ന ബട്ടൺ ക്ലിക്ക് ചെയ്ത്   എത്തുന്ന പേജിൽ നിന്നും  Copy link എന്ന ബട്ടൺ ക്ലിക്ക്  ചെയ്തു കോപ്പി ചെയ്ത് എല്ലാ ക്ലാസ് ടീച്ചർമാർക്കും അയച്ചു കൊടുക്കുക. അവരോട് സ്വന്തം മൊബൈൽ നമ്പറും പേരും വെച്ച് ക്ലാസിന്റെ പേരിൽ രജിസ്റ്റർ ചെയ്യുവാൻ പറയുക. യൂസർനേമും പാസ്സ്‌വേർഡും എല്ലാ കുട്ടികൾക്കും അയച്ചു കൊടുക്കുവാനും പറയുക. അതുവെച്ച് എല്ലാ കുട്ടികളോടും തൈകൾ അപ്‌ലോഡ് ചെയ്യുവാൻ പറയുക( ക്ലാസ് ടീച്ചറുടെ ഫോൺ നമ്പർ ആയിരിക്കും User Name).</p><br /><br />
      </div> */}
      <Footer />
    </div>
  );
}

export default function CoordinatorDashBoard() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CoordinatorDashBoardContent />
    </Suspense>
  );
}
