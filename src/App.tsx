import { useState } from "react";
import {
  Button,
  Label,
  Radio,
  RadioGroup,
  TextField,
} from "react-aria-components";
import Arcade from "./assets/images/icon-arcade.svg";
import Advanced from "./assets/images/icon-advanced.svg";
import Pro from "./assets/images/icon-pro.svg";
import iconThankYou from "./assets/images/icon-thank-you.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <section title="steps-section">
          <ol>
            <li>
              <span>1</span>
              <div>
                <span>Step 1</span>
                <span>Your info</span>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <span>Step 2</span>
                <span>Select plan</span>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <span>Step 3</span>
                <span>Add-ons</span>
              </div>
            </li>
            <li>
              <span>4</span>
              <div>
                <span>Step 4</span>
                <span>Summary</span>
              </div>
            </li>
          </ol>
        </section>
        <section title="form-wrapper">
          <form action="">
            <h2>Personal info</h2>
            <p>Please provide your name, email address, and phone number.</p>
            <Label>Name</Label>
            <TextField>e.g. Stephen King</TextField>
            <Label>Email Address</Label>
            <TextField>e.g. stephenking@lorem.com</TextField>
            <Label>Phone Number</Label>
            <TextField>e.g. +1 234 567 890</TextField>
          </form>
          <form action="">
            <h2>Select your plan</h2>
            <p>You have the option of monthly or yearly billing.</p>
            <RadioGroup>
              <Radio>
                <picture>
                  <img src="" alt="" />
                </picture>
                <div>
                  <span>Arcade</span>
                  <span>$9/mo</span>
                  <span>2 months free</span>
                </div>
              </Radio>
              <Radio>
                <picture>
                  <img src="" alt="" />
                </picture>
                <div>
                  <span>Advanced</span>
                  <span>$12/mo</span>
                  <span>2 months free</span>
                </div>
              </Radio>
              <Radio>
                <picture>
                  <img src="" alt="" />
                </picture>
                <div>
                  <span>Pro</span>
                  <span>$15/mo</span>
                  <span>2 months free</span>
                </div>
              </Radio>
            </RadioGroup>
            <div>
              <span>Monthly</span>
              {/* slider */}
              <span>Yearly</span>
            </div>
          </form>
          <form action="">
            <h2>Pick add-ons</h2>
            <p>Add-ons help enhance your gaming experience.</p>
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
          <form action="">
            <h2>Finishing up</h2>
            <p>Double-check everything looks OK before confirming.</p>
            <div>
              <div>Plan</div>
              <div>Add-ons</div>
            </div>
            <span>Total (per month/year)</span>
          </form>
          <div>
            <picture>
              <img src={iconThankYou} alt="" />
              <h3>Thank you!</h3>
              <p>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
              </p>
            </picture>
          </div>
        </section>
        <section>
          <Button>Go Back</Button>
          <Button>Next Step</Button>
        </section>
      </main>
    </>
  );
}

export default App;
