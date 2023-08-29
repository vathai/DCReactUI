import React, { useState, useEffect } from 'react';

const CharStats = () => {

    const [Attacker] = useState();

    return (
        <div>
            (Attacker != null) ? <h3>{Attacker.Level}</h3>
        </div>
        )
}