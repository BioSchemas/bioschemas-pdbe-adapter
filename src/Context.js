export const context = {
    "@context": [
        "http://schema.org",
        {
            "@base": "http://schema.org"
        },
        {
            "ProteinStructure": {
                "@id": "http://semanticscience.org/resource/SIO_011119"
            },
            "Protein": {
                "@id": "http://purl.obolibrary.org/obo/PR_000000001"
            },
            "structureDeterminationMethod": {
                "@id": "structureDeterminationMethod",
                "@type": "@id"
            },
            "resolution": {
                "@id": "resolution",
                "@type": "@id"
            },
            "Domain": "http://semanticscience.org/resource/SIO_001379.rdf",
            "boundMolecule": {
                "@id": "boundMolecule",
                "@type": "@id"
            },
            "Organism": {
                "@id": "http://semanticscience.org/resource/SIO_010000"
            }
        }
    ]
};