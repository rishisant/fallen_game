/*
    真田理志
    BOTTOM GAME BAR COMPONENT USED FOR DISPLAYING THE BASIC GAME INFORMATION.
*/

import React, { useState, useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

import BUTTON_BCK from '../assets/img/pixel-back.png';

const BottomGameBar = ({selectedMenu, setSelectedMenu}) => {
    const { gameState } = useContext(GameContext);

    return (
        <div className='bottom-game-bar'>
            <div className='bottom-game-bar-content'>
                <div className='bottom-game-bar-item'>
                    <div className='button-background' onClick={() => setSelectedMenu('society')}>
                        SOCIETY INFORMATION
                    </div>
                    <div className='button-background' onClick={() => setSelectedMenu('divine')}>
                        DIVINE RELATIONS
                    </div>
                    <div className='button-background' onClick={() => setSelectedMenu('economic')}>
                        ECONOMIC DEVELOPMENT
                    </div>
                    <div className='button-background' onClick={() => setSelectedMenu('health')}>
                        HEALTH & DEMOGRAPHICS
                    </div>
                    <div className='button-background' onClick={() => setSelectedMenu('infrastructure')}>
                        INFRASTRUCTURE
                    </div>
                    <div className='button-background' onClick={() => setSelectedMenu('military')}>
                        MILITARY & ESPIONAGE
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomGameBar;

// const initialState = {
//     baseVariables: {
//         timePassed: 0,
//         godChosen: null, // Will become either raphat, isahra, or mil'aab
//         trust: 25, // multipliers
//         wealth: 25, // multipliers
//         magic: 25, // multipliers
//         percentageConquered: 0, // percentage to 100 (if the population reaches integer of 1,000,000 you win, so your population is 20,000, you have 5% of the world)
//     },
//     secondaryVariables: {
//         population: 20, // actual integer
//         godHappiness: 50, // multipliers
//         knowledge: 50, // multipliers
//         birthRate: 5, // actual integer
//         deathRate: 3, // actual integer (so for each action 3 die for 5 born)
//         warCapability: 50, // multipliers
//     },
//     buildings: {
//         altarNumbers: 0, // actual integer 
//         barracksNumbers: 0, // actual integer, increase means that you can win more wars with more troops
//         schoolNumbers: 0, // actual integer, increase means that you can increase knowledge faster and cultural advances
//         farmNumbers: 0, // actual integer, increase means that you can increase population growth and health+age+etc
//         templeNumbers: 0, // actual integer, increase means that you can increase god happiness and perform more rituals
//     },
//     socialCulturalVariables: {
//         religiousFervor: 50, // how much people believe in the god (affects happiness)
//         culturalAdvances: 50, // affects knowledge, entertainment, societal development
//         publicOrder: 50, // affects trust and potential for insurrection (lower it gets, the more likely people will turn on you)
//         diplomacy: 50, // affects wealth through trade, or risk through war
//     },
//     economicDevelopmentalVariables: {
//         marketStability: 50, // affects economic health, prosperity
//         techLevel: 25, // affects construction of advanced buildings, farming techniques, war tools, etc...
//         tradeRoutes: 25, // affects wealth and resource availability, as well as gaining new followers
//     },
//     healthDemographicVariables: {
//         healthcareFacilities: 0, // affects population and deathrate (lower it gets, the more people die per time passed)
//         averageLifespan: 50, // the higher it gets, the more knowledge is transferred, and the more stable the workforce
//         immigrationEmigrationRates: 0, // affects population, bringing in new skills or losing workforce
//         fertilityTreatments: 0, // affects birthrate
//     },
//     infrastructureVariables: {
//         roads: 0, // affects trade and troop movement speed
//         waterSupply: 0, // affects population health and farming (higher it gets, the more people are healthy and the more food is produced, etc...)
//         defenseSystems: 0, // affects war capabilities and public order
//         energySources: 0, // affects productivity and growth rate
//     },
//     miscellaneousVariables: {
//         espionage: 0, // affects diplomatic and military decisions (can help you win wars, etc...)
//         artifactHoldings: 0, // affects various aspects based on their nature
//         culturalMonuments: 0, // affects morale and cultural level (more monuments, more followers bc they see your gods)
//     },
// };

// const gameReducer = (state, action) => {
//     switch (action.type) {
//         case 'INCREMENT_TIMEPASSED':
//             return {
//                 ...state,
//                 baseVariables: {
//                     ...state.baseVariables,
//                     timePassed: state.baseVariables.timePassed + action.payload,
//                 }
//             };
//         case 'DECREMENT_TRUST':
//             return {
//                 ...state,
//                 baseVariables: {
//                     ...state.baseVariables,
//                     trust: state.baseVariables.trust - action.payload,
//                 }
//             };
//         case 'INCREMENT_TRUST':
//             return {
//                 ...state,
//                 baseVariables: {
//                     ...state.baseVariables,
//                     trust: state.baseVariables.trust + action.payload,
//                 }
//             };
//         case 'DECREMENT_WEALTH':
//             return {
//                 ...state,
//                 baseVariables: {
//                     ...state.baseVariables,
//                     wealth: state.baseVariables.wealth - action.payload,
//                 }
//             };
//         case 'INCREMENT_WEALTH':
//             return {
//                 ...state,
//                 baseVariables: {
//                     ...state.baseVariables,
//                     wealth: state.baseVariables.wealth + action.payload,
//                 }
//             };
//         case 'DECREMENT_MAGIC':
//             return {
//                 ...state,
//                 baseVariables: {
//                     ...state.baseVariables,
//                     magic: state.baseVariables.magic - action.payload,
//                 }
//             };
//         case 'INCREMENT_MAGIC':
//             return {
//                 ...state,
//                 baseVariables: {
//                     ...state.baseVariables,
//                     magic: state.baseVariables.magic + action.payload,
//                 }
//             };
//         case 'INCREMENT_POPULATION':
//             return {
//                 ...state,
//                 secondaryVariables: {
//                     ...state.secondaryVariables,
//                     population: state.secondaryVariables.population + action.payload,
//                 }
//             };
//         case 'DECREMENT_POPULATION':
//             return {
//                 ...state,
//                 secondaryVariables: {
//                     ...state.secondaryVariables,
//                     population: state.secondaryVariables.population - action.payload,
//                 }
//             };
//         case 'INCREMENT_GODHAPPINESS':
//             return {
//                 ...state,
//                 secondaryVariables: {
//                     ...state.secondaryVariables,
//                     godHappiness: state.secondaryVariables.godHappiness + action.payload,
//                 }
//             };
//         case 'DECREMENT_GODHAPPINESS':
//             return {
//                 ...state,
//                 secondaryVariables: {
//                     ...state.secondaryVariables,
//                     godHappiness: state.secondaryVariables.godHappiness - action.payload,
//                 }
//             };
//         case 'INCREMENT_KNOWLEDGE':
//             return {
//                 ...state,
//                 secondaryVariables: {
//                     ...state.secondaryVariables,
//                     knowledge: state.secondaryVariables.knowledge + action.payload,
//                 }
//             };
//         case 'DECREMENT_KNOWLEDGE':
//             return {
//                 ...state,
//                 secondaryVariables: {
//                     ...state.secondaryVariables,
//                     knowledge: state.secondaryVariables.knowledge - action.payload,
//                 }
//             };
//         case 'INCREMENT_BIRTHRATE':
//             return {
//                 ...state,
//                 secondaryVariables: {
//                     ...state.secondaryVariables,
//                     birthRate: state.secondaryVariables.birthRate + action.payload,
//                 }
//             };
//         case 'DECREMENT_BIRTHRATE':
//             return {
//                 ...state,
//                 secondaryVariables: {
//                     ...state.secondaryVariables,
//                     birthRate: state.secondaryVariables.birthRate - action.payload,
//                 }
//             };
//         case 'INCREMENT_DEATHRATE':
//             return {
//                 ...state,
//                 secondaryVariables: {
//                     ...state.secondaryVariables,
//                     deathRate: state.secondaryVariables.deathRate + action.payload,
//                 }
//             };
//         case 'DECREMENT_DEATHRATE':
//             return {
//                 ...state,
//                 secondaryVariables: {
//                     ...state.secondaryVariables,
//                     deathRate: state.secondaryVariables.deathRate - action.payload,
//                 }
//             };
//         case 'INCREMENT_WARCAPABILITY':
//             return {
//                 ...state,
//                 secondaryVariables: {
//                     ...state.secondaryVariables,
//                     warCapability: state.secondaryVariables.warCapability + action.payload,
//                 }
//             };
//         case 'DECREMENT_WARCAPABILITY':
//             return {
//                 ...state,
//                 secondaryVariables: {
//                     ...state.secondaryVariables,
//                     warCapability: state.secondaryVariables.warCapability - action.payload,
//                 }
//             };
//         case 'INCREMENT_ALTARNUMBERS':
//             return {
//                 ...state,
//                 buildings: {
//                     ...state.buildings,
//                     altarNumbers: state.buildings.altarNumbers + action.payload,
//                 }
//             };
//         case 'DECREMENT_ALTARNUMBERS':
//             return {
//                 ...state,
//                 buildings: {
//                     ...state.buildings,
//                     altarNumbers: state.buildings.altarNumbers - action.payload,
//                 }
//             };
//         case 'INCREMENT_BARRACKSNUMBERS':
//             return {
//                 ...state,
//                 buildings: {
//                     ...state.buildings,
//                     barracksNumbers: state.buildings.barracksNumbers + action.payload,
//                 }
//             };
//         case 'DECREMENT_BARRACKSNUMBERS':
//             return {
//                 ...state,
//                 buildings: {
//                     ...state.buildings,
//                     barracksNumbers: state.buildings.barracksNumbers - action.payload,
//                 }
//             };
//         case 'INCREMENT_SCHOOLNUMBERS':
//             return {
//                 ...state,
//                 buildings: {
//                     ...state.buildings,
//                     schoolNumbers: state.buildings.schoolNumbers + action.payload,
//                 }
//             };
//         case 'DECREMENT_SCHOOLNUMBERS':
//             return {
//                 ...state,
//                 buildings: {
//                     ...state.buildings,
//                     schoolNumbers: state.buildings.schoolNumbers - action.payload,
//                 }
//             };
//         case 'INCREMENT_FARMNUMBERS':
//             return {
//                 ...state,
//                 buildings: {
//                     ...state.buildings,
//                     farmNumbers: state.buildings.farmNumbers + action.payload,
//                 }
//             };
//         case 'DECREMENT_FARMNUMBERS':
//             return {
//                 ...state,
//                 buildings: {
//                     ...state.buildings,
//                     farmNumbers: state.buildings.farmNumbers - action.payload,
//                 }
//             };
//         case 'INCREMENT_TEMPLENUMBERS':
//             return {
//                 ...state,
//                 buildings: {
//                     ...state.buildings,
//                     templeNumbers: state.buildings.templeNumbers + action.payload,
//                 }
//             };
//         case 'DECREMENT_TEMPLENUMBERS':
//             return {
//                 ...state,
//                 buildings: {
//                     ...state.buildings,
//                     templeNumbers: state.buildings.templeNumbers - action.payload,
//                 }
//             };
//         case 'INCREMENT_RELIGIOUSFERVOR':
//             return {
//                 ...state,
//                 socialCulturalVariables: {
//                     ...state.socialCulturalVariables,
//                     religiousFervor: state.socialCulturalVariables.religiousFervor + action.payload,
//                 }
//             };
//         case 'DECREMENT_RELIGIOUSFERVOR':
//             return {
//                 ...state,
//                 socialCulturalVariables: {
//                     ...state.socialCulturalVariables,
//                     religiousFervor: state.socialCulturalVariables.religiousFervor - action.payload,
//                 }
//             };
//         case 'INCREMENT_CULTURALADVANCES':
//             return {
//                 ...state,
//                 socialCulturalVariables: {
//                     ...state.socialCulturalVariables,
//                     culturalAdvances: state.socialCulturalVariables.culturalAdvances + action.payload,
//                 }
//             };
//         case 'DECREMENT_CULTURALADVANCES':
//             return {
//                 ...state,
//                 socialCulturalVariables: {
//                     ...state.socialCulturalVariables,
//                     culturalAdvances: state.socialCulturalVariables.culturalAdvances - action.payload,
//                 }
//             };
//         case 'INCREMENT_PUBLICORDER':
//             return {
//                 ...state,
//                 socialCulturalVariables: {
//                     ...state.socialCulturalVariables,
//                     publicOrder: state.socialCulturalVariables.publicOrder + action.payload,
//                 }
//             };
//         case 'DECREMENT_PUBLICORDER':
//             return {
//                 ...state,
//                 socialCulturalVariables: {
//                     ...state.socialCulturalVariables,
//                     publicOrder: state.socialCulturalVariables.publicOrder - action.payload,
//                 }
//             };
//         case 'INCREMENT_DIPLOMACY':
//             return {
//                 ...state,
//                 socialCulturalVariables: {
//                     ...state.socialCulturalVariables,
//                     diplomacy: state.socialCulturalVariables.diplomacy + action.payload,
//                 }
//             };
//         case 'DECREMENT_DIPLOMACY':
//             return {
//                 ...state,
//                 socialCulturalVariables: {
//                     ...state.socialCulturalVariables,
//                     diplomacy: state.socialCulturalVariables.diplomacy - action.payload,
//                 }
//             };
//         case 'INCREMENT_MARKETSTABILITY':
//             return {
//                 ...state,
//                 economicDevelopmentalVariables: {
//                     ...state.economicDevelopmentalVariables,
//                     marketStability: state.economicDevelopmentalVariables.marketStability + action.payload,
//                 }
//             };
//         case 'DECREMENT_MARKETSTABILITY':
//             return {
//                 ...state,
//                 economicDevelopmentalVariables: {
//                     ...state.economicDevelopmentalVariables,
//                     marketStability: state.economicDevelopmentalVariables.marketStability - action.payload,
//                 }
//             };
//         case 'INCREMENT_TECHLEVEL':
//             return {
//                 ...state,
//                 economicDevelopmentalVariables: {
//                     ...state.economicDevelopmentalVariables,
//                     techLevel: state.economicDevelopmentalVariables.techLevel + action.payload,
//                 }
//             };
//         case 'DECREMENT_TECHLEVEL':
//             return {
//                 ...state,
//                 economicDevelopmentalVariables: {
//                     ...state.economicDevelopmentalVariables,
//                     techLevel: state.economicDevelopmentalVariables.techLevel - action.payload,
//                 }
//             };
//         case 'INCREMENT_TRADEROUTES':
//             return {
//                 ...state,
//                 economicDevelopmentalVariables: {
//                     ...state.economicDevelopmentalVariables,
//                     tradeRoutes: state.economicDevelopmentalVariables.tradeRoutes + action.payload,
//                 }
//             };
//         case 'DECREMENT_TRADEROUTES':
//             return {
//                 ...state,
//                 economicDevelopmentalVariables: {
//                     ...state.economicDevelopmentalVariables,
//                     tradeRoutes: state.economicDevelopmentalVariables.tradeRoutes - action.payload,
//                 }
//             };
//         case 'INCREMENT_HEALTHCAREFACILITIES':
//             return {
//                 ...state,
//                 healthDemographicVariables: {
//                     ...state.healthDemographicVariables,
//                     healthcareFacilities: state.healthDemographicVariables.healthcareFacilities + action.payload,
//                 }
//             };
//         case 'DECREMENT_HEALTHCAREFACILITIES':
//             return {
//                 ...state,
//                 healthDemographicVariables: {
//                     ...state.healthDemographicVariables,
//                     healthcareFacilities: state.healthDemographicVariables.healthcareFacilities - action.payload,
//                 }
//             };
//         case 'INCREMENT_AVERAGELIFESPAN':
//             return {
//                 ...state,
//                 healthDemographicVariables: {
//                     ...state.healthDemographicVariables,
//                     averageLifespan: state.healthDemographicVariables.averageLifespan + action.payload,
//                 }
//             };
//         case 'DECREMENT_AVERAGELIFESPAN':
//             return {
//                 ...state,
//                 healthDemographicVariables: {
//                     ...state.healthDemographicVariables,
//                     averageLifespan: state.healthDemographicVariables.averageLifespan - action.payload,
//                 }
//             };
//         case 'INCREMENT_IMMIGRATIONEMIGRATIONRATES':
//             return {
//                 ...state,
//                 healthDemographicVariables: {
//                     ...state.healthDemographicVariables,
//                     immigrationEmigrationRates: state.healthDemographicVariables.immigrationEmigrationRates + action.payload,
//                 }
//             };
//         case 'DECREMENT_IMMIGRATIONEMIGRATIONRATES':
//             return {
//                 ...state,
//                 healthDemographicVariables: {
//                     ...state.healthDemographicVariables,
//                     immigrationEmigrationRates: state.healthDemographicVariables.immigrationEmigrationRates - action.payload,
//                 }
//             };
//         case 'INCREMENT_FERTILITYTREATMENTS':
//             return {
//                 ...state,
//                 healthDemographicVariables: {
//                     ...state.healthDemographicVariables,
//                     fertilityTreatments: state.healthDemographicVariables.fertilityTreatments + action.payload,
//                 }
//             };
//         case 'DECREMENT_FERTILITYTREATMENTS':
//             return {
//                 ...state,
//                 healthDemographicVariables: {
//                     ...state.healthDemographicVariables,
//                     fertilityTreatments: state.healthDemographicVariables.fertilityTreatments - action.payload,
//                 }
//             };
//         case 'INCREMENT_ROADS':
//             return {
//                 ...state,
//                 infrastructureVariables: {
//                     ...state.infrastructureVariables,
//                     roads: state.infrastructureVariables.roads + action.payload,
//                 }
//             };
//         case 'DECREMENT_ROADS':
//             return {
//                 ...state,
//                 infrastructureVariables: {
//                     ...state.infrastructureVariables,
//                     roads: state.infrastructureVariables.roads - action.payload,
//                 }
//             };
//         case 'INCREMENT_WATERSUPPLY':
//             return {
//                 ...state,
//                 infrastructureVariables: {
//                     ...state.infrastructureVariables,
//                     waterSupply: state.infrastructureVariables.waterSupply + action.payload,
//                 }
//             };
//         case 'DECREMENT_WATERSUPPLY':
//             return {
//                 ...state,
//                 infrastructureVariables: {
//                     ...state.infrastructureVariables,
//                     waterSupply: state.infrastructureVariables.waterSupply - action.payload,
//                 }
//             };
//         case 'INCREMENT_DEFENSESYSTEMS':
//             return {
//                 ...state,
//                 infrastructureVariables: {
//                     ...state.infrastructureVariables,
//                     defenseSystems: state.infrastructureVariables.defenseSystems + action.payload,
//                 }
//             };
//         case 'DECREMENT_DEFENSESYSTEMS':
//             return {
//                 ...state,
//                 infrastructureVariables: {
//                     ...state.infrastructureVariables,
//                     defenseSystems: state.infrastructureVariables.defenseSystems - action.payload,
//                 }
//             };
//         case 'INCREMENT_ENERGYSOURCES':
//             return {
//                 ...state,
//                 infrastructureVariables: {
//                     ...state.infrastructureVariables,
//                     energySources: state.infrastructureVariables.energySources + action.payload,
//                 }
//             };
//         case 'DECREMENT_ENERGYSOURCES':
//             return {
//                 ...state,
//                 infrastructureVariables: {
//                     ...state.infrastructureVariables,
//                     energySources: state.infrastructureVariables.energySources - action.payload,
//                 }
//             };
//         case 'INCREMENT_ESPIONAGE':
//             return {
//                 ...state,
//                 miscellaneousVariables: {
//                     ...state.miscellaneousVariables,
//                     espionage: state.miscellaneousVariables.espionage + action.payload,
//                 }
//             };
//         case 'DECREMENT_ESPIONAGE':
//             return {
//                 ...state,
//                 miscellaneousVariables: {
//                     ...state.miscellaneousVariables,
//                     espionage: state.miscellaneousVariables.espionage - action.payload,
//                 }
//             };
//         case 'INCREMENT_ARTIFACTHOLDINGS':
//             return {
//                 ...state,
//                 miscellaneousVariables: {
//                     ...state.miscellaneousVariables,
//                     artifactHoldings: state.miscellaneousVariables.artifactHoldings + action.payload,
//                 }
//             };
//         case 'DECREMENT_ARTIFACTHOLDINGS':
//             return {
//                 ...state,
//                 miscellaneousVariables: {
//                     ...state.miscellaneousVariables,
//                     artifactHoldings: state.miscellaneousVariables.artifactHoldings - action.payload,
//                 }
//             };
//         case 'INCREMENT_CULTURALMONUMENTS':
//             return {
//                 ...state,
//                 miscellaneousVariables: {
//                     ...state.miscellaneousVariables,
//                     culturalMonuments: state.miscellaneousVariables.culturalMonuments + action.payload,
//                 }
//             };
//         case 'DECREMENT_CULTURALMONUMENTS':
//             return {
//                 ...state,
//                 miscellaneousVariables: {
//                     ...state.miscellaneousVariables,
//                     culturalMonuments: state.miscellaneousVariables.culturalMonuments - action.payload,
//                 }
//             };
//         default:
//             return state;
//     }
// };

// const GameContextProvider = ({ children }) => {
//     const [gameState, dispatch] = useReducer(gameReducer, initialState);

//     return (
//         <GameContext.Provider value={{ gameState, dispatch }}>
//             {children}
//         </GameContext.Provider>
//     );
// };

// export default GameContextProvider;

