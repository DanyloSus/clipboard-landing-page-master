import Block from "./Elements/Block";
import Header from "./Elements/Footer";

const App = () => {
  return (
    <main className="flex flex-col items-center gap-[123px] pt-[123px] md:px-8 overflow-x-hidden">
      <img
        src="./bg-header-desktop.png"
        alt="bg header desktop"
        className="absolute w-screen object-cover top-0 left-0 md:hidden -z-10"
      />
      <img
        src="./bg-header-mobile.png"
        alt="bg header mobile"
        className="absolute w-screen object-cover top-0 left-0 md:block hidden -z-10"
      />
      <Block
        isImg={true}
        h1="A history of everything you copy"
        p="Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices."
        isButtons={true}
        isH1={true}
      />
      <Block
        h1="Keep track of your snippets"
        p="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything."
      />
      <section className="flex items-center justify-start">
        <div>
          <img
            src="./image-computer.png"
            alt="image computer"
            className="relative -left-[200px] md:left-0"
          />
        </div>
        <div className="w-[337px] relative -left-[100px] flex flex-col justify-between gap-10 md:left-0">
          <div>
            <h2 className="text-3xl font-bold text-dark-grayish-blue">
              Quick Search
            </h2>
            <p className="text-grayish-blue">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark-grayish-blue">
              iCloud Sync
            </h2>
            <p className="text-grayish-blue">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-dark-grayish-blue">
              Complete History
            </h2>
            <p className="text-grayish-blue">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </section>
      <Block
        h1="Access Clipboard anywhere"
        p="Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
      />
      <img src="./image-devices.png" alt="image devices" />
      <Block
        h1="Supercharge your workflow"
        p="We’ve got the tools to boost your productivity. "
      />
      <section className="flex gap-6 text-center items-center flex-wrap justify-center">
        <div className="w-[350px] flex flex-col gap-3">
          <img
            src="./icon-blacklist.svg"
            alt="icon blacklist"
            className="mx-auto"
          />
          <h1 className="text-3xl font-bold text-dark-grayish-blue mt-10">
            Create blacklists
          </h1>
          <p className="text-grayish-blue">
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </div>
        <div className="w-[350px] flex flex-col gap-3">
          <img src="./icon-text.svg" alt="icon text" className="mx-auto" />
          <h1 className="text-3xl font-bold text-dark-grayish-blue mt-10">
            Plain text snippets
          </h1>
          <p className="text-grayish-blue">
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </div>
        <div className="w-[350px] flex flex-col gap-3">
          <img
            src="./icon-preview.svg"
            alt="icon preview"
            className="mx-auto"
          />
          <h1 className="text-3xl font-bold text-dark-grayish-blue mt-10">
            Sneak preview
          </h1>
          <p className="text-grayish-blue">
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </div>
      </section>
      <section className="flex gap-[90px] items-center justify-center flex-wrap">
        <img src="./logo-google.png" alt="logo google" />
        <img src="./logo-ibm.png" alt="logo ibm" />
        <img src="./logo-microsoft.png" alt="logo microsoft" />
        <img src="./logo-hp.png" alt="logo hp" />
        <img src="./logo-vector-graphics.png" alt="logo vector graphics" />
      </section>
      <Block
        h1="Clipboard for iOS and Mac OS"
        p="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you’re ready to start adding to your clipboard."
        isButtons={true}
      />
      <Header />
    </main>
  );
};

export default App;
