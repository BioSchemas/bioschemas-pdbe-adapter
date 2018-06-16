/*jslint node: true */
"use strict";

import _filter from 'lodash-es/filter';
import _assign from 'lodash-es/assign';
import _map from 'lodash-es/map';
import {context} from './Context';

export default class ParserHelper {
    constructor() {
        this._accession = null;
        this._adaptedData = _assign({}, context);
        this._entry = {};
    }

    adaptData(entry) {
        this._accession = Object.keys(entry)[0];
        this._entry = entry[this._accession][0];
        this._adaptRecord();
        this._adaptMinimum();
        return this._adaptedData;
    }

    _adaptRecord() {
        this._adaptedData = _assign(this._adaptedData, {
            "@type": "DataRecord",
            "@id": `http://www.identifiers.org/pdbe:${this._accession}`,
            "identifier": this._accession,
            "url": `http://pdbe.org/${this._accession}`,
            "datePublished": this._entry.revision_date,
            "distribution": {
                "@type": "DataDownload",
                "url": `http://www.ebi.ac.uk/pdbe/entry-files/download/${this._accession}.cif`
            }
        });
    }


    _adaptMinimum() {
        this._adaptedData.mainEntity = {
            "@type": ["BioChemEntity", "ProteinStructure"],
            "identifier": this._accession
        };
        try {
            this._adaptedData.mainEntity.name = this._entry.title;
            this._adaptedData.mainEntity.structureDeterminationMethod = this._entry.experimental_method;
        } catch (e) {
            this._adaptedData.mainEntity.name = this._accession;
        }
    }
}