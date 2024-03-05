import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FieldError,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Switch,
  TextField,
} from "react-aria-components";
import { IconAdvanced, IconArcade, IconPro } from "./Icons";

const FormSchema = z.object({
  name: z.string().min(6, { message: "This field is required" }),
  email: z.string().email({ message: "This field is required" }),
  phone: z.string().min(6, { message: "This field is required" }),
});

type TypeSchema = z.infer<typeof FormSchema>;

type FormProps = {
  step: number;
};

const CustomForm: React.FunctionComponent<FormProps> = ({ step }) => {
  const {
    register,
    reset,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TypeSchema>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: TypeSchema) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=""
      className="absolute top-[-3rem] left-4 bg-neutral-5 rounded-xl p-8 flex flex-col gap-4"
    >
      {step == 1 ? (
        <div className="flex flex-col gap-4">
          <h2 className="text-primary-1 text-2xl font-bold">Personal info</h2>
          <p className="text-neutral-1">
            Please provide your name, email address, and phone number.
          </p>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField className="flex flex-col gap-1">
                <Label className="text-primary-1 text-sm">Name</Label>
                <Input
                  className="border border-solid border-neutral-2 rounded-md p-2 text-neutral-1 font-medium"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="e.g. Stephen King"
                />
                {errors.name && <FieldError>{errors.name.message}</FieldError>}
              </TextField>
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField className="flex flex-col gap-1">
                <Label className="text-primary-1 text-sm">Email Address</Label>
                <Input
                  className="border border-solid border-neutral-2 rounded-md p-2 text-neutral-1 font-medium"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="e.g. stephenking@lorem.com"
                />
                {errors.email && (
                  <FieldError>{errors.email.message}</FieldError>
                )}
              </TextField>
            )}
          />

          <Controller
            control={control}
            name="phone"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <TextField className="flex flex-col gap-1">
                <Label className="text-primary-1 text-sm">Phone Number</Label>
                <Input
                  className="border border-solid border-neutral-2 rounded-md p-2 text-neutral-1 font-medium"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="e.g. +1 234 567 890"
                />
                {errors.phone && (
                  <FieldError>{errors.phone.message}</FieldError>
                )}
              </TextField>
            )}
          />
        </div>
      ) : step == 2 ? (
        <div className="flex flex-col gap-4">
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
            <span>Yearly</span>
          </Switch>
        </div>
      ) : null}
      {/* <div className="w-full">
        <input
          {...register("email")}
          type="email"
          className="w-full rounded-md px-6 py-2 text-neutral-2"
          placeholder="Enter your email address"
          required
        />
        {errors.email && (
          <p className="bg-primary-2 text-white text-sm p-1">
            {errors.email.message}
          </p>
        )}
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full rounded-md bg-primary-2 px-6 py-2 border border-solid border-primary-2 hover:bg-white hover:text-primary-2 focus-visible:bg-white focus-visible:text-primary-2 disabled:bg-neutral-1 md:w-64"
      >
        Contact Us
      </button> */}
    </form>
  );
};

/* {step == 0 ? (
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
)} */

export default CustomForm;
