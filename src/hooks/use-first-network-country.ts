import { useEffect, useState } from 'react';
import type { Network } from '../types/network';

// Hook:
// pegar a primeira network de cada país
// pegar a quantidade de networks de cada país

// objetivo: renderizar uma network por país
// ao clicar nela, mostrar as demais networks do país, com zoom no mapa

type FirstNetworkCountryProps = {
	nameCountry: string;
	latitude: number;
	longitude: number;
	countNetwork: number;
};

type CountryWithNetworksProps = Record<string, Network[]>;
// {nomePaís: [rede1, rede2, rede3, ...redeN]}

export const useFirstNetworkCountry = (
	networks: Network[]
): FirstNetworkCountryProps[] => {
	const [pointFirstNetwork, setPointFirstNetwork] = useState<
		FirstNetworkCountryProps[]
	>([]);

	//atualizar o estado sempre que NETWORKS atualizar
	useEffect(() => {
		const getFirstNetworkCountry = (
			networks: Network[]
		): FirstNetworkCountryProps[] => {
			const countriesWithNetworksData: CountryWithNetworksProps = {};

			//passa por todas as networks
			for (let i = 0; i < networks.length; i++) {
				const network = networks[i];
				const country = network.location.country;
				// vê se já tem o espaço na memória para o country
				if (!countriesWithNetworksData[country]) {
					//se não tiver, cria o espaço
					countriesWithNetworksData[country] = [];
				}
				// se tiver, adiciona a network
				countriesWithNetworksData[country].push(network);
			}

			//passa pelos países, para pegar a primeira network de cada país
			const firstNetworks: FirstNetworkCountryProps[] = [];
			for (const country in countriesWithNetworksData) {
				const networksInCountry = countriesWithNetworksData[country];

				const firstNetwork = networksInCountry[0];

				//todo?: implementar pegar network aleatória

				firstNetworks.push({
					nameCountry: country,
					latitude: firstNetwork.location.latitude,
					longitude: firstNetwork.location.longitude,
					countNetwork: networksInCountry.length
				});
			}

			return firstNetworks;
		};

		setPointFirstNetwork(getFirstNetworkCountry(networks));
	}, [networks]);

	//aqui fica as informações requeridas
	return pointFirstNetwork;
};
