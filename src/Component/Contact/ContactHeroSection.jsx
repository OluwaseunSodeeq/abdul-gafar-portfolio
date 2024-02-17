import { useState } from "react";
import Container from "../Container";
import InputType from "./InputType";

function ContactHeroSection() {
  const [textAreaValue, setTextAreaValue] = useState("");

  //  UI DATA

  const inputArray = [
    {
      label: "Name",
      inputType: "text",
      placeholdertext: "Abdul-Gafar Jimoh",
      forText: "Name",
    },
    {
      label: "Email",
      inputType: "email",
      placeholdertext: "Gafarj544@gmail.com",
      forText: "email",
    },
    {
      label: "Phone",
      inputType: "tel",
      placeholdertext: "+2348123208163",
      forText: "",
    },
    {
      label: "Subject",
      inputType: "text",
      placeholdertext: "Design a website for my Company",
      forText: "subject",
    },
  ];

  const contactOptnArray = [
    {
      socialHandle: "Email",
      icon: (
        <svg
          width="20"
          height="27"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_629_1291)">
            <path
              d="M28.5 7L16.5 18L4.5 7"
              stroke="#333437"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.5 7H28.5V24C28.5 24.2652 28.3946 24.5196 28.2071 24.7071C28.0196 24.8946 27.7652 25 27.5 25H5.5C5.23478 25 4.98043 24.8946 4.79289 24.7071C4.60536 24.5196 4.5 24.2652 4.5 24V7Z"
              stroke="#333437"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.3186 16L4.80859 24.7175"
              stroke="#333437"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28.1897 24.7175L18.6797 16"
              stroke="#333437"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_629_1291">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      socialHandle: "Whatsapp",
      icon: (
        <svg
          width="20"
          height="27"
          viewBox="0 0 33 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_629_1291)">
            <path
              d="M28.5 7L16.5 18L4.5 7"
              stroke="#333437"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.5 7H28.5V24C28.5 24.2652 28.3946 24.5196 28.2071 24.7071C28.0196 24.8946 27.7652 25 27.5 25H5.5C5.23478 25 4.98043 24.8946 4.79289 24.7071C4.60536 24.5196 4.5 24.2652 4.5 24V7Z"
              stroke="#333437"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.3186 16L4.80859 24.7175"
              stroke="#333437"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M28.1897 24.7175L18.6797 16"
              stroke="#333437"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_629_1291">
              <rect
                width="32"
                height="32"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      socialHandle: "Linkedln",
      icon: (
        <svg
          width="27"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.25 0.25H1.75C1.35218 0.25 0.970644 0.408035 0.68934 0.68934C0.408035 0.970644 0.25 1.35218 0.25 1.75V18.25C0.25 18.6478 0.408035 19.0294 0.68934 19.3107C0.970644 19.592 1.35218 19.75 1.75 19.75H18.25C18.6478 19.75 19.0294 19.592 19.3107 19.3107C19.592 19.0294 19.75 18.6478 19.75 18.25V1.75C19.75 1.35218 19.592 0.970644 19.3107 0.68934C19.0294 0.408035 18.6478 0.25 18.25 0.25ZM7 14.5C7 14.6989 6.92098 14.8897 6.78033 15.0303C6.63968 15.171 6.44891 15.25 6.25 15.25C6.05109 15.25 5.86032 15.171 5.71967 15.0303C5.57902 14.8897 5.5 14.6989 5.5 14.5V8.5C5.5 8.30109 5.57902 8.11032 5.71967 7.96967C5.86032 7.82902 6.05109 7.75 6.25 7.75C6.44891 7.75 6.63968 7.82902 6.78033 7.96967C6.92098 8.11032 7 8.30109 7 8.5V14.5ZM6.25 7C6.0275 7 5.80999 6.93402 5.62498 6.8104C5.43998 6.68679 5.29578 6.51109 5.21064 6.30552C5.12549 6.09995 5.10321 5.87375 5.14662 5.65552C5.19002 5.43729 5.29717 5.23684 5.4545 5.0795C5.61184 4.92217 5.81229 4.81502 6.03052 4.77162C6.24875 4.72821 6.47495 4.75049 6.68052 4.83564C6.88609 4.92078 7.06179 5.06498 7.1854 5.24998C7.30902 5.43499 7.375 5.6525 7.375 5.875C7.375 6.17337 7.25647 6.45952 7.0455 6.6705C6.83452 6.88147 6.54837 7 6.25 7ZM15.25 14.5C15.25 14.6989 15.171 14.8897 15.0303 15.0303C14.8897 15.171 14.6989 15.25 14.5 15.25C14.3011 15.25 14.1103 15.171 13.9697 15.0303C13.829 14.8897 13.75 14.6989 13.75 14.5V11.125C13.75 10.6277 13.5525 10.1508 13.2008 9.79918C12.8492 9.44754 12.3723 9.25 11.875 9.25C11.3777 9.25 10.9008 9.44754 10.5492 9.79918C10.1975 10.1508 10 10.6277 10 11.125V14.5C10 14.6989 9.92098 14.8897 9.78033 15.0303C9.63968 15.171 9.44891 15.25 9.25 15.25C9.05109 15.25 8.86032 15.171 8.71967 15.0303C8.57902 14.8897 8.5 14.6989 8.5 14.5V8.5C8.50093 8.31629 8.56925 8.13931 8.69201 8.00264C8.81477 7.86596 8.98342 7.7791 9.16598 7.75852C9.34853 7.73794 9.53229 7.78508 9.68239 7.891C9.8325 7.99691 9.93851 8.15423 9.98031 8.33313C10.4877 7.98894 11.0792 7.78947 11.6914 7.75611C12.3036 7.72276 12.9133 7.85679 13.455 8.14381C13.9968 8.43083 14.4501 8.86 14.7664 9.38523C15.0826 9.91046 15.2498 10.5119 15.25 11.125V14.5Z"
            fill="#333437"
          />
        </svg>
      ),
    },
    {
      socialHandle: "Twitter",
      icon: (
        <svg
          width="27"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1019_4005)">
            <path
              d="M23.0318 7.28062L20.2286 10.0837C19.6624 16.6481 14.1265 21.75 7.50114 21.75C6.13989 21.75 5.01771 21.5344 4.16552 21.1088C3.47833 20.7647 3.19708 20.3963 3.12677 20.2913C3.06407 20.1972 3.02344 20.0903 3.00789 19.9783C2.99235 19.8664 3.00231 19.7524 3.03701 19.6448C3.07172 19.5373 3.13029 19.439 3.20833 19.3572C3.28637 19.2755 3.38188 19.2125 3.48771 19.1728C3.51208 19.1634 5.76021 18.3 7.18802 16.6566C6.39619 16.0055 5.70497 15.241 5.13677 14.3878C3.97427 12.6619 2.67302 9.66375 3.07427 5.18343C3.08699 5.04107 3.14012 4.90531 3.22741 4.79213C3.3147 4.67895 3.43252 4.59307 3.56698 4.54461C3.70144 4.49614 3.84696 4.48711 3.98638 4.51857C4.12581 4.55003 4.25334 4.62067 4.35396 4.72218C4.38677 4.755 7.47396 7.82531 11.2483 8.82094V8.25C11.2469 7.6513 11.3653 7.05838 11.5965 6.50613C11.8277 5.95388 12.167 5.45347 12.5946 5.03437C13.0098 4.61974 13.5039 4.29247 14.0476 4.07188C14.5914 3.85129 15.1738 3.74184 15.7605 3.75C16.5476 3.75776 17.3193 3.96905 18.0006 4.36331C18.6818 4.75758 19.2495 5.32142 19.6483 6H22.5011C22.6496 5.99988 22.7947 6.0438 22.9181 6.12621C23.0416 6.20861 23.1378 6.32579 23.1946 6.4629C23.2514 6.60002 23.2663 6.75091 23.2373 6.89648C23.2083 7.04204 23.1368 7.17573 23.0318 7.28062Z"
              fill="#333437"
            />
          </g>
          <defs>
            <clipPath id="clip0_1019_4005">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      socialHandle: "Facebook",
      icon: (
        <svg
          width="20"
          height="27"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.75 9.99997C19.7469 12.3829 18.8726 14.6825 17.2917 16.4656C15.7109 18.2486 13.5326 19.3921 11.1671 19.6806C11.1145 19.6866 11.0611 19.6813 11.0107 19.6651C10.9602 19.649 10.9137 19.6223 10.8743 19.5869C10.8348 19.5514 10.8034 19.508 10.782 19.4596C10.7605 19.4111 10.7496 19.3586 10.75 19.3056V12.25H13C13.1028 12.2502 13.2045 12.2293 13.2989 12.1885C13.3933 12.1478 13.4783 12.088 13.5487 12.013C13.619 11.938 13.6732 11.8494 13.7078 11.7526C13.7424 11.6558 13.7568 11.5529 13.75 11.4503C13.7334 11.2574 13.6444 11.078 13.5009 10.9481C13.3574 10.8181 13.1701 10.7474 12.9765 10.75H10.75V8.49997C10.75 8.10215 10.908 7.72062 11.1893 7.43931C11.4706 7.15801 11.8521 6.99997 12.25 6.99997H13.75C13.8528 7.0002 13.9545 6.97928 14.0489 6.93853C14.1433 6.89777 14.2283 6.83803 14.2987 6.76304C14.369 6.68805 14.4232 6.59939 14.4578 6.50258C14.4924 6.40577 14.5068 6.30288 14.5 6.20029C14.4834 6.0071 14.3941 5.82739 14.2502 5.69742C14.1063 5.56745 13.9185 5.49689 13.7246 5.49998H12.25C11.4543 5.49998 10.6912 5.81605 10.1286 6.37865C9.56603 6.94126 9.24996 7.70433 9.24996 8.49997V10.75H6.99996C6.89714 10.7497 6.79538 10.7707 6.70099 10.8114C6.6066 10.8522 6.52159 10.9119 6.45126 10.9869C6.38092 11.0619 6.32676 11.1506 6.29213 11.2474C6.2575 11.3442 6.24315 11.4471 6.24996 11.5497C6.26655 11.7428 6.35579 11.9226 6.49968 12.0525C6.64357 12.1825 6.8314 12.2531 7.02527 12.25H9.24996V19.3075C9.25028 19.3604 9.2394 19.4128 9.21803 19.4612C9.19666 19.5096 9.16528 19.5529 9.12597 19.5884C9.08665 19.6238 9.04028 19.6505 8.98991 19.6667C8.93954 19.6829 8.88631 19.6883 8.83371 19.6825C6.40498 19.3867 4.1758 18.1899 2.5874 16.3289C0.999005 14.4679 0.167161 12.0785 0.25652 9.63341C0.44402 4.57091 4.54464 0.455289 9.6109 0.258414C10.9225 0.207607 12.231 0.421868 13.4579 0.88838C14.6848 1.35489 15.8051 2.06407 16.7516 2.9735C17.6981 3.88293 18.4515 4.97393 18.9667 6.18123C19.4819 7.38854 19.7483 8.68735 19.75 9.99997Z"
            fill="#333437"
          />
        </svg>
      ),
    },
  ];

  function handler(e) {
    e.preventDefault();
    const inputValue = e.target.value.trim();
    // const minTexts = inputValue.split(/\s+/).length;

    // if (minTexts < 3) return;
    setTextAreaValue(inputValue);
  }
  return (
    <div className="w-full h-auto mt-28 lg:mt-32">
      <Container>
        <div className="px-0 py-4">
          <h3 className="font-bold font-Helvetica text-2xl leading-9 tracking-widest text-logo-text lg:text-4xl lg:leading-10">
            Contact
          </h3>
          <p className="lg:text-lg font-Helvetica font-medium md:mt-2">
            Thanks for reaching out
          </p>
        </div>
      </Container>
      <Container>
        <div className="  lg:border-[#CED3DC]  md:border -mt-10 md:mt-0 py-4 md:p-8 lg:p-12 lg:rounded-lg">
          <div className=" md:flex md:justify-between md:flex-wrap ">
            <InputType each={inputArray[0]} />
            <InputType each={inputArray[1]} />
            <InputType each={inputArray[2]} />
            <InputType each={inputArray[3]} />
          </div>

          <div className="px-0 py-4  lg:w-full lg:px-0">
            <label
              htmlFor="usertextAreaValue"
              className="font-bold font-Helvetica leading-8 text-xl tracking-widest"
            >
              Leave me a message
            </label>
            <textarea
              id="usertextAreaValue"
              value={textAreaValue}
              onChange={handler}
              className="border-b border-[#CECFD1] w-full mt-8 pb-0 pt-2 lg:w-full lg:h-20 bg-transparent outline-none "
              placeholder="I saw your portfolio on linkedln. Looks Great! Let”s schedule a call"
              style={{
                fontFamily: "Helvetica",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "26px",
                letterSpacing: "0.08em",
                textAlign: "left",
              }}
            />
          </div>
          <button className=" block font-Helvetica font-medium leading-7 text-base md:text-lg lg:text-xl py-1 px-2 md:p-2 lg:py-3 lg:px-4 text-content-color border-user-color border-2 rounded-lg md:mt-[40px] lg:mt-[90px]">
            Send message
          </button>
        </div>
      </Container>
      <Container>
        <div className="hidden lg:block">
          <h3 className="font-Helvetica text-4xl text-user-color font-bold tracking-widest  leading-10">
            Other Contact Options
          </h3>
          <div className="flex justify-between py-[72px]">
            {contactOptnArray.map((each) => (
              <div
                key={each.socialHandle}
                className="w-[200px] lg:h-[72px] flex items-center justify-center gap-3 bg-plain-white shadow-md  "
              >
                <span>{each.icon}</span>
                <span className="font-Helvetica font-bold text-xl leading-7 tracking-widest">
                  {each.socialHandle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactHeroSection;
