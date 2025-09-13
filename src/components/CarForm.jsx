import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomButton from "../ui/CustomButton";
import * as Yup from "yup";

const CarForm = () => {
  const initialValues = {
    name: "",
    email: "",
    bookingDate: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    bookingDate: Yup.date().required("Required"),
    comment: Yup.string(),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="border border-solid border-[#dadde1] rounded-[10px] p-8 w-[640px] mx-auto">
      <h2 className="text-xl font-bold mb-2 text-dark">Book your car now</h2>
      <p className="font-medium text-base text-gray-third mb-6">
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4">
          <div>
            <Field
              placeholder="Name*"
              name="name"
              type="text"
              className="w-full p-2 border rounded-2xl bg-white-second focus:bg-white hover:bg-white h-[48px]"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <Field
              placeholder="Email*"
              name="email"
              type="email"
              className="w-full p-2 border rounded-2xl bg-white-second focus:bg-white hover:bg-white h-[48px]"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <Field
              placeholder="Booking date*"
              name="bookingDate"
              type="date"
              className="w-full p-2 border rounded-2xl bg-white-second focus:bg-white hover:bg-white h-[48px]"
            />
            <ErrorMessage
              name="bookingDate"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div>
            <Field
              placeholder="Comment"
              name="comment"
              type="text"
              className="w-full p-2 border rounded-2xl bg-white-second focus:bg-white hover:bg-white h-[88px]"
            />
            <ErrorMessage
              name="comment"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <CustomButton className="w-[156px] text-white justify-center items-center self-center mt-4">
            Send
          </CustomButton>
        </Form>
      </Formik>
    </div>
  );
};

export default CarForm;
