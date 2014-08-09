# Public: Print the ordinal of a Jekyll date.
#
# date - The Jekyll date String being passed.
# day  - The date variable formatted to the day of the month, without padded 0's.
#
# Examples
#
#   {{ page.date | ordinal }}
#   # => "st"
#
# Returns the ordinal String.

module Jekyll
    module Ordinal
        def ordinal(date)
            day = date.strftime("%-d");
            case day
            when "1", "21", "31";
                "st"
            when "2", "22";
                "nd"
            when "3", "23";
                "rd"
            else
                "th"
            end
        end
    end
end

Liquid::Template.register_filter(Jekyll::Ordinal)