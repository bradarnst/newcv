#!/bin/env perl
# perl -i -pe 'BEGIN{undef $/;} s/(Catalog.*?endobj\n\n).*?endobj\n\n/$1/sm'

use strict;
use warnings;

my $filename = @ARGV[0];
my $fileback = $filename.'.bak';

if (not defined $filename) {
  die "Need filename to process.\n";
}

use File::Slurp qw(read_file write_file);

# my $file = path($filename);

my $data = read_file $filename;
$data =~ s/(Catalog.*?endobj\n\n).*?endobj\n/$1/sm;
write_file $filename, $data;
