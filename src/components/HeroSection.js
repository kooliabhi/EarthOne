import React from "react";
import "./HeroSection.css";
import shipImage from "../assets/ship.jpg";
import mapImage from "../assets/Map.jpg";
import shippImage from "../assets/shippp.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="header">
        <h1 className="pt-serif-regular">Earth One</h1>
        <p class="name">
          Earth One is a <span className="highlight">global alliance</span> of
          influential, generous, and daring leaders <br />
          collaborating to catalyze a new approach to social and environmental
          stewardship.
        </p>
        <div className="box">
          <img src={shipImage} alt="image of ship" />
          <div className="tags">
            <p class="name1">This Novembar</p>
            <h1 class="name2">The Atlantic Crossing</h1>
            <button>EXPLORE THE CROSSING</button>
          </div>
        </div>
      </div>
      <div className="body">
        <h1 class="pt-serif">
          A regenerative future is possible within our lifetimes.
        </h1>

        <h2>
          If you’re here, you already know we are at a critical juncture — a
          breaching of our planetary boundaries, a collapse of compassion, and
          ever increasing isolation
        </h2>
        <h2>
          We each hold the seeds of change. Yet our collective potential has
          often remained unrealized for lack of awareness, poor coordination,
          and misaligned incentives.
        </h2>
        <h2>
          Earth One believes a regenerative future — a world where human
          activities contribute to the continuous renewal and flourishing of
          life on Earth — is possible within our lifetime.
        </h2>
        <h2>
          We exist to weave together the world’s most catalytic leaders in
          service of this future.
        </h2>
      </div>
      <div className="box2">
        <h1 class="namee">Your mastery is needed.</h1>
        <p class="names">
          We’re inviting a very select group of thinkers and creators with the
          vision, capacity, and leverage to affect planetary change.
        </p>
        <p class="names">
          Leaders like you — skillful and heartfelt, inside a field of trust,
          affinity and generosity.
        </p>
        <p class="names">
          Together, members of Earth One cultivate compassion, generously share
          resources, and collaborate creatively — enjoying the journey along the
          way.
        </p>

        <p class="names">
          This is the work of our time. The world is calling for a new kind of
          leadership.
        </p>
      </div>
      <div className="box3">
        <h1>We're better together.</h1>
        <p>
          We convene the Earth One Alliance through a series of invitation-only
          experiences. These gatherings serve as flashpoints for expanding
          global perspective, cross-pollinating people and ideas, and
          illuminating paradigm-shifting projects capable of inspiring
          civilization towards a regenerative future.
        </p>
        <div className="contain">
          <div>
            <h1 class="nmt">Immersions</h1>
            <p class="nmtt">
              Intimate, patron-funded, multi-day convenings focused on specific
              impact theses, which are curated on domain-expertise or
              multi-disciplinary relevance. Our immersions are hosted across the
              world, and are opportunities to elevate each-others’ projects, or
              co-generate new ones.
            </p>
          </div>
          <div>
            <h1 class="nmt">The Global Assembly</h1>
            <p class="nmtt">
              An annual 300-person, invite-only summit. This year’s Assembly is
              The Atlantic Crossing, which gathers Fellows and our larger
              community — at sea — to collectively workshop powerful initiatives
              and experience new land-based regenerative projects during our
              stop in the Azores, all while celebrating our larger mission.
            </p>
          </div>
        </div>
      </div>
      <div className="map">
        <img src={mapImage} alt="Map" />
      </div>
      <hr className="half-width-line" />;
      <div class="box4">
        <img src={shippImage} alt="" />
      </div>
      <div className="body">
        <h1 class="pt-serif">Earth One grows from regenerosity.</h1>

        <h2>
          The foundational principle of Earth One is “regenerosity” – the
          understanding that when individuals in a collective give more than
          they receive, they create a flywheel of generosity and impact.
        </h2>
        <h2>
          This philosophy means that nearly all Earth One events are fully
          patron-funded, allowing selected participants to participate in these
          powerful and immersive experiences at no cost.
        </h2>
        <h2>
          To maintain a pure and lasting intention, Earth One is being
          structured as a non-profit governed by a board of appointed stewards.
        </h2>
      </div>
      <div className="box5">
        <h1 class="namee">
          We’ve partnered with Unreasonable Group and To.org to help curate our
          future Fellows.
        </h1>
        <div class="content">
          {" "}
          <div>
            <h2 class="headline">
              A Fellowship of tech entrepreneurs building unreasonable
              companies.
            </h2>
            <p>
              Unreasonable exists to re-purpose capitalism by profitably solving
              pressing global problems. <br /> The 249 ventures in the
              Unreasonable Fellowship operate across more than 180 countries,
              have collectively generated $3.6 billion in revenue, raised $4.7
              billion in financing, and are positively impacting the lives of
              more than 530 million <br />
              people. Sound Unreasonable? We hope so. Because reasonable ideas
              seldom change anything.
            </p>
          </div>
          <div>
            <h2 class="headline">
              A Fellowship of tech entrepreneurs building unreasonable
              companies.
            </h2>
            <p>
              Unreasonable exists to re-purpose capitalism by profitably solving
              pressing global problems. <br /> The 249 ventures in the
              Unreasonable Fellowship operate across more than 180 countries,
              have collectively generated $3.6 billion in revenue, raised $4.7
              billion in financing, and are positively impacting the lives of
              more than 530 million <br />
              people. Sound Unreasonable? We hope so. Because reasonable ideas
              seldom change anything.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
