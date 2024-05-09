/*
    真田理志
    バッグテスト用のストア
*/

import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

import '../assets/css/BugStore.css';

const BugTestStore = () => {
    const { gameState } = useContext(GameContext);

    return (
        <>
            <div className="bug-store-variables">
                <div className="bug-store-column">
                    <div className="bug-store-title">
                        GAME VARIABLES...
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Time Passed: {gameState.baseVariables.timePassed}
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            God Chosen: {gameState.baseVariables.godChosen}
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Percentage Conquered: {gameState.baseVariables.percentageConquered}%
                        </p>
                    </div>
                </div>

                <div className="bug-store-column">
                    <div className="bug-store-title">
                        SECONDARY VARIABLES...
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Population: {gameState.secondaryVariables.population}
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            God Happiness: {gameState.secondaryVariables.godHappiness}%
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Knowledge: {gameState.secondaryVariables.knowledge}%
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Birth Rate: {gameState.secondaryVariables.birthRate}
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Death Rate: {gameState.secondaryVariables.deathRate}
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            War Capability: {gameState.secondaryVariables.warCapability}%
                        </p>
                    </div>
                </div>

                <div className="bug-store-column">
                    <div className="bug-store-title">
                        BUILDINGS...
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Altar Numbers: {gameState.buildings.altarNumbers}
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Barracks Numbers: {gameState.buildings.barracksNumbers}
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            School Numbers: {gameState.buildings.schoolNumbers}
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Farm Numbers: {gameState.buildings.farmNumbers}
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Temple Numbers: {gameState.buildings.templeNumbers}
                        </p>
                    </div>
                </div>

                <div className="bug-store-column">
                    <div className="bug-store-title">
                        SOCIAL & CULTURAL VARIABLES...
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Religious Fervor: {gameState.socialCulturalVariables.religiousFervor}%
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Cultural Advances: {gameState.socialCulturalVariables.culturalAdvances}%
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Public Order: {gameState.socialCulturalVariables.publicOrder}%
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Diplomacy: {gameState.socialCulturalVariables.diplomacy}%
                        </p>
                    </div>
                </div>

                <div className="bug-store-column">
                    <div className="bug-store-title">
                        ECONOMIC & DEVELOPMENTAL VARIABLES...
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Market Stability: {gameState.economicDevelopmentalVariables.marketStability}%
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Tech Level: {gameState.economicDevelopmentalVariables.techLevel}%
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Trade Routes: {gameState.economicDevelopmentalVariables.tradeRoutes}%
                        </p>
                    </div>
                </div>

                <div className="bug-store-column">
                    <div className="bug-store-title">
                        HEALTH & DEMOGRAPHIC VARIABLES...
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Healthcare Facilities: {gameState.healthDemographicVariables.healthcareFacilities}
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Average Lifespan: {gameState.healthDemographicVariables.averageLifespan}
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            immigrationEmigrationRates: {gameState.healthDemographicVariables.immigrationEmigrationRates}
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Fertility Treatments: {gameState.healthDemographicVariables.fertilityTreatments}
                        </p>
                    </div>
                </div>

                <div className="bug-store-column">
                    <div className="bug-store-title">
                        INFRASTRUCTURE VARIABLES...
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Roads: {gameState.infrastructureVariables.roads}
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Water Supply: {gameState.infrastructureVariables.waterSupply}
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Defense Systems: {gameState.infrastructureVariables.defenseSystems}
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Energy Sources: {gameState.infrastructureVariables.energySources}
                        </p>
                    </div>
                </div>

                <div className="bug-store-column">
                    <div className="bug-store-title">
                        MISCELLANEOUS VARIABLES...
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Espionage: {gameState.miscellaneousVariables.espionage}
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Artifact Holdings: {gameState.miscellaneousVariables.artifactHoldings}
                        </p>
                    </div>

                    <div className="bug-store-item">
                        <p className="bug-store-text">
                            Cultural Monuments: {gameState.miscellaneousVariables.culturalMonuments}
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default BugTestStore;

/*

const initialState = {
    baseVariables: {
        timePassed: 0,
        godChosen: null, // Will become either raphat, isahra, or mil'aab
        trust: 25, // multipliers (so 25%) (if it reaches 0, you lose)
        wealth: 100, // currency
        maxWealth: 1000, // max currency
        magic: 0, // magic power
        maxMagic: 100, // max magic power
        percentageConquered: 0, // percentage to 100 (if the population reaches integer of 1,000,000 you win, so your population is 20,000, you have 5% of the world)
    },
    secondaryVariables: {
        population: 100, // actual integer
        godHappiness: 50, // multipliers
        knowledge: 50, // multipliers
        birthRate: 5, // actual integer
        deathRate: 3, // actual integer (so for each action 3 die for 5 born)
        warCapability: 50, // multipliers
    },
    buildings: {
        altarNumbers: 0, // actual integer 
        barracksNumbers: 0, // actual integer, increase means that you can win more wars with more troops
        schoolNumbers: 0, // actual integer, increase means that you can increase knowledge faster and cultural advances
        farmNumbers: 0, // actual integer, increase means that you can increase population growth and health+age+etc
        templeNumbers: 0, // actual integer, increase means that you can increase god happiness and perform more rituals
    },
    socialCulturalVariables: {
        religiousFervor: 50, // how much people believe in the god (affects happiness)
        culturalAdvances: 50, // affects knowledge, entertainment, societal development
        publicOrder: 50, // affects trust and potential for insurrection (lower it gets, the more likely people will turn on you)
        diplomacy: 50, // affects wealth through trade, or risk through war
    },
    economicDevelopmentalVariables: {
        marketStability: 50, // affects economic health, prosperity
        techLevel: 25, // affects construction of advanced buildings, farming techniques, war tools, etc...
        tradeRoutes: 25, // affects wealth and resource availability, as well as gaining new followers
    },
    healthDemographicVariables: {
        healthcareFacilities: 0, // affects population and deathrate (lower it gets, the more people die per time passed)
        averageLifespan: 50, // the higher it gets, the more knowledge is transferred, and the more stable the workforce
        immigrationEmigrationRates: 0, // affects population, bringing in new skills or losing workforce
        fertilityTreatments: 0, // affects birthrate
    },
    infrastructureVariables: {
        roads: 0, // affects trade and troop movement speed
        waterSupply: 0, // affects population health and farming (higher it gets, the more people are healthy and the more food is produced, etc...)
        defenseSystems: 0, // affects war capabilities and public order
        energySources: 0, // affects productivity and growth rate
    },
    miscellaneousVariables: {
        espionage: 0, // affects diplomatic and military decisions (can help you win wars, etc...)
        artifactHoldings: 0, // affects various aspects based on their nature
        culturalMonuments: 0, // affects morale and cultural level (more monuments, more followers bc they see your gods)
    },
};
*/