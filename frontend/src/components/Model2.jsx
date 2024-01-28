import React from "react";

export default function Modal2() {
	const [showModal, setShowModal] = React.useState(false);
	return (
		<>
			<button
				type="button"
				onClick={() => setShowModal(true)}
				className="rounded-full bg-indigo-600 ml-4 mt-2 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				Open Doc
			</button>
			{showModal ? (
				<>
					<div className="justify-center p-2 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-3xl font-semibold">Optify-Auth</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/*body*/}
								<div className="px-4 sm:px-0">
									<h3 className="text-base font-semibold leading-7 text-gray-900">
										Npm Commands
									</h3>
									<code className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
										npm i optify-auth
									</code>
								</div>
								<div className="mt-6 border-t border-gray-100">
									<dl className="divide-y divide-gray-100">
										<div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
											<dt className="text-sm font-medium leading-6 text-gray-900">
												library name
											</dt>
											<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
												Optify Auth SDK
											</dd>
										</div>
										<div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
											<dt className="text-sm font-medium leading-6 text-gray-900">
												Application for
											</dt>
											<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
												Backend Developer
											</dd>
										</div>
										<div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
											<dt className="text-sm font-medium leading-6 text-gray-900">
												Email address
											</dt>
											<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
												margotfoster@example.com
											</dd>
										</div>
										<div className="bg-white px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
											<dt className="text-sm font-medium leading-6 text-gray-900">
												Salary expectation
											</dt>
											<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
												$120,000
											</dd>
										</div>
										<div className="bg-gray-50 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-3">
											<dt className="text-sm font-medium leading-6 text-gray-900">
												About
											</dt>
											<dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
												Fugiat ipsum ipsum deserunt culpa aute sint do nostrud
												anim incididunt cillum culpa consequat. Excepteur qui
												ipsum aliquip consequat sint. Sit id mollit nulla mollit
												nostrud in ea officia proident. Irure nostrud pariatur
												mollit ad adipisicing reprehenderit deserunt qui eu.
											</dd>
										</div>
									</dl>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									<a
										href="https://www.npmjs.com/package/optify-notify?activeTab=readme"
										className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									>
										Open Package
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}
