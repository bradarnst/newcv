#!/bin/sh
perl -i -pe 'BEGIN{undef $/;} s/(Catalog.*?endobj\n\n).*?endobj\n\n/$1/sm'
