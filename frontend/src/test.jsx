import logo from "./img/logo-grocery.jpg";

export default function Test() {
    return (
        <div class="fixed top-0 left-0 w-full backdrop-blur-lg bg-black/60 p-2 flex items-center">
            <div>
                <img class="h-8 w-8 rounded" src={logo} alt="Logo" />
            </div>
            {/* <div class="ml-4 text-center text-white font-mono text-2xl">
                Hi, I am a developer
            </div> */}
        </div>
    );
}
