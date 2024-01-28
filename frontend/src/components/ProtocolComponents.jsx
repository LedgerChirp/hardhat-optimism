import Modal from "./Modal";
import Modal2 from "./Model2";
import Modal3 from "./Model3";

const components = [
	{
		name: "Notification Optimism",
		role: "Build Your Custom Notification Optimisms with Optify",
		imageUrl:
			"https://tailwindui.com/img/category-thumbnails/application-ui/alerts.png",
		Url: "https://www.npmjs.com/package/optify-notify?activeTab=readme",
		modelComponent: Modal,
	},
	{
		name: "Auth Optimism",
		role: "Build Your Custom Auth Optimisms with Optify",
		imageUrl:
			"https://tailwindui.com/img/category-thumbnails/application-ui/media-objects.png",
		Url: "https://www.npmjs.com/package/optify-auth?activeTab=readme",
		modelComponent: Modal2,
	},
	{
		name: "Send Optimism Token",
		role: "Build Your Custom Send Optimisms with Optify",
		imageUrl:
			"https://tailwindui.com/img/category-thumbnails/application-ui/action-panels.png",
		Url: "https://www.npmjs.com/package/optify-send?activeTab=readme",
		modelComponent: Modal3,
	},
];

export default function ProtocolComponent() {
	return (
		<div className="backgroundmesh bg-no-repeat bg-[url('https://assets-global.website-files.com/611dbb3c82ba72fbc285d4e2/61f57be955c904bf1b84ed97_Wave%403x.png')] bg-bottom py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Implement your code fast with Optimism Protocol Components
					</h2>
				</div>
				<ul className="mx-auto mt-20 grid max-w-2xl pb-4 grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{components.map((component) => (
						<li key={component.name} className="bg-white rounded-md pb-4">
							<img
								className="aspect-[3/2] w-full rounded-2xl object-cover"
								src={component.imageUrl}
								alt=""
							/>
							<h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 px-4">
								{component.name}
							</h3>
							<p className="text-base leading-7 text-gray-600 px-4">
								{component.role}
							</p>
							{component.modelComponent && <component.modelComponent />}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
