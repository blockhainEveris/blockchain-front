export function LocationLoader() {
	// Take into account NOVA's junction
	let uuaa: string = window.location.pathname.indexOf('ENOA') > -1 ? 'ENOA' : undefined;
	let pathnameElement: Element = document.head.querySelector("[property='nova:serviceName']");
	let serviceName: string = '/';

	if (pathnameElement)
	{
		let pathname: string = pathnameElement.getAttribute('content');

		if (pathname && pathname !== '${serviceName}')
		{
			if (uuaa)
			{
				serviceName = serviceName + uuaa + '/';
			}

			serviceName = serviceName + pathname + '/';
		}
	}

	return serviceName;
}
