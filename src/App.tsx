import { useState } from "react";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Switch,
  TextField,
} from "react-aria-components";
import {
  IconAdvanced,
  IconArcade,
  IconPro,
  IconThanks,
} from "./components/Icons";

function App() {
  const [step, setStep] = useState(0);

  function handleNext(): void {
    setStep((prev) => prev + 1);
  }
  function handleBack(): void {
    setStep((prev) => prev - 1);
  }

  return (
    <>
      <main className="flex flex-col justify-between h-screen text-base font-normal font-Ubuntu bg-neutral-3">
        <header className="h-1/5 bg-[url(src/assets/images/bg-sidebar-mobile.svg)] bg-center bg-cover bg-no-repeat text-neutral-5 font-medium">
          <ol className="flex flex-row items-center justify-center gap-8 pt-8">
            <li className="border border-solid border-neutral-5 rounded-full h-8 w-8 flex flex-row items-center justify-center">
              <span>1</span>
              <div className="hidden">
                <span>Step 1</span>
                <span>Your info</span>
              </div>
            </li>
            <li className="border border-solid border-neutral-5 rounded-full h-8 w-8 flex flex-row items-center justify-center">
              <span>2</span>
              <div className="hidden">
                <span>Step 2</span>
                <span>Select plan</span>
              </div>
            </li>
            <li className="border border-solid border-neutral-5 rounded-full h-8 w-8 flex flex-row items-center justify-center">
              <span>3</span>
              <div className="hidden">
                <span>Step 3</span>
                <span>Add-ons</span>
              </div>
            </li>
            <li className="border border-solid border-neutral-5 rounded-full h-8 w-8 flex flex-row items-center justify-center">
              <span>4</span>
              <div className="hidden">
                <span>Step 4</span>
                <span>Summary</span>
              </div>
            </li>
          </ol>
        </header>
        <section title="form-wrapper" className="w-11/12 h-full p-4 relative">
          {step == 0 ? (
            <form
              action=""
              className="absolute top-[-3rem] left-4 bg-neutral-5 rounded-xl p-8 flex flex-col gap-4"
            >
              <h2 className="text-primary-1 text-2xl font-bold">
                Personal info
              </h2>
              <p className="text-neutral-1">
                Please provide your name, email address, and phone number.
              </p>
              <Label className="text-primary-1 text-sm">Name</Label>
              <TextField className="border border-solid border-neutral-2 rounded-md p-2 text-neutral-1 font-medium">
                e.g. Stephen King
              </TextField>
              <Label className="text-primary-1 text-sm">Email Address</Label>
              <TextField className="border border-solid border-neutral-2 rounded-md p-2 text-neutral-1 font-medium">
                e.g. stephenking@lorem.com
              </TextField>
              <Label className="text-primary-1 text-sm">Phone Number</Label>
              <TextField className="border border-solid border-neutral-2 rounded-md p-2 text-neutral-1 font-medium">
                e.g. +1 234 567 890
              </TextField>
            </form>
          ) : step == 1 ? (
            <form
              action=""
              className="absolute top-[-3rem] left-4 bg-neutral-5 rounded-xl p-8 flex flex-col gap-4"
            >
              <h2 className="text-primary-1 text-2xl font-bold">
                Select your plan
              </h2>
              <p className="text-neutral-1">
                You have the option of monthly or yearly billing.
              </p>

              <ListBox
                aria-label="Plan options"
                selectionMode="single"
                className="flex flex-col gap-4"
              >
                <ListBoxItem className="rounded-lg border border-neutral-2 border-solid p-4 flex flex-row gap-4">
                  <picture>
                    <IconArcade></IconArcade>
                  </picture>
                  <div className="flex flex-col gap-1">
                    <span className="text-primary-1 font-bold">Arcade</span>
                    <span className="text-neutral-1">$9/mo</span>
                    <span className="text-primary-1 font-medium">
                      2 months free
                    </span>
                  </div>
                </ListBoxItem>
                <ListBoxItem className="rounded-lg border border-neutral-2 border-solid p-4 flex flex-row gap-4">
                  <picture>
                    <IconAdvanced></IconAdvanced>
                  </picture>
                  <div className="flex flex-col gap-1">
                    <span className="text-primary-1 font-bold">Advanced</span>
                    <span className="text-neutral-1">$12/mo</span>
                    <span className="text-primary-1 font-medium">
                      2 months free
                    </span>
                  </div>
                </ListBoxItem>
                <ListBoxItem className="rounded-lg border border-neutral-2 border-solid p-4 flex flex-row gap-4">
                  <picture>
                    <IconPro></IconPro>
                  </picture>
                  <div className="flex flex-col gap-1">
                    <span className="text-primary-1 font-bold">Pro</span>
                    <span className="text-neutral-1">$15/mo</span>
                    <span className="text-primary-1 font-medium">
                      2 months free
                    </span>
                  </div>
                </ListBoxItem>
              </ListBox>

              <Switch className="flex flex-row items-center justify-center gap-2 bg-neutral-3 p-2 rounded-lg text-neutral-1 font-medium">
                <span>Monthly</span>
                <div className="bg-primary-1 rounded-xl w-10 h-5"></div>

                {/*       <div className="flex h-[26px] w-[44px] shrink-0 cursor-default rounded-full shadow-inner bg-clip-padding border border-solid border-white/30 p-[3px] box-border transition duration-200 ease-in-out bg-yellow-600 group-pressed:bg-yellow-700 group-selected:bg-amber-800 group-selected:group-pressed:bg-amber-900 outline-none group-focus-visible:ring-2 ring-black">
      <span className="h-[18px] w-[18px] transform rounded-full bg-white shadow transition duration-200 ease-in-out translate-x-0 group-selected:translate-x-[100%]" />
    </div> */}

                <span>Yearly</span>
              </Switch>
            </form>
          ) : step == 2 ? (
            <form
              action=""
              className="absolute top-[-3rem] left-4 bg-neutral-5 rounded-xl p-8"
            >
              <h2 className="text-primary-1 text-2xl font-bold">
                Pick add-ons
              </h2>
              <p className="text-neutral-1">
                Add-ons help enhance your gaming experience.
              </p>
              <div>
                <div>checkbox</div>
                <div>
                  <span>Online service</span>
                  <span>Access to multiplayer games</span>
                </div>
                <span>+$1/mo</span>
                <span>+$10/yr</span>
              </div>
              <div>
                <div>checkbox</div>
                <div>
                  <span>Larger storage</span>
                  <span>Extra 1TB of cloud save</span>
                </div>
                <span>+$2/mo</span>
                <span>+$20/yr</span>
              </div>
              <div>
                <div>checkbox</div>
                <div>
                  <span>Customizable Profile</span>
                  <span>Custom theme on your profile</span>
                </div>
                <span>+$2/mo</span>
                <span>+$20/yr</span>
              </div>
            </form>
          ) : step == 3 ? (
            <form
              action=""
              className="absolute top-[-3rem] left-4 bg-neutral-5 rounded-xl p-8"
            >
              <h2 className="text-primary-1 text-2xl font-bold">
                Finishing up
              </h2>
              <p className="text-neutral-1">
                Double-check everything looks OK before confirming.
              </p>
              <div>
                <div>Plan</div>
                <div>Add-ons</div>
              </div>
              <span>Total (per month/year)</span>
            </form>
          ) : (
            <div>
              <picture>
                <IconThanks></IconThanks>
                <h3 className="text-primary-1 text-2xl font-bold">
                  Thank you!
                </h3>
                <p className="text-neutral-1">
                  Thanks for confirming your subscription! We hope you have fun
                  using our platform. If you ever need support, please feel free
                  to email us at support@loremgaming.com.
                </p>
              </picture>
            </div>
          )}
        </section>
        <footer className="bg-neutral-5 p-4 flex flex-row items-center justify-between">
          <Button
            onPress={handleBack}
            className="bg-primary-1 text-neutral-5 font-medium px-4 py-2 rounded-md"
          >
            Go Back
          </Button>
          <Button
            onPress={handleNext}
            className="bg-primary-1 text-neutral-5 font-medium px-4 py-2 rounded-md"
          >
            Next Step
          </Button>
        </footer>
      </main>
    </>
  );
}

export default App;
