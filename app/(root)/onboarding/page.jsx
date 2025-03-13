import { getUserOnboardingStatus } from "@/actions/user";
import { industries } from "@/constants/data/industries";
import { redirect } from "next/navigation";
import OnboardingForm from "./_components/onboarding-form";

const OnboardingPage = async () => {
	const { isOnboarded } = await getUserOnboardingStatus();

	if (isOnboarded) redirect("/dashboard");

	return (
		<main>
			<OnboardingForm data={industries} />
		</main>
	);
};

export default OnboardingPage;
