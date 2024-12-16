import MainNavigator from "../components/MainNavigator"

export default function ErrorPage() {
    return (
        <div>
            <MainNavigator />
            <main>
                <h1>404 Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </main>
        </div>
    );
}